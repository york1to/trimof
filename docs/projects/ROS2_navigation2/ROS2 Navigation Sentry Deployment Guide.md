## ROS2 Navigation Sentry Deployment Guide

[toc]

### 1 Dependencies

> There're no `rosdep` commands because building from source is recommended.

#### 1.1 livox_sdk2

Follow the official guide.

[livox sdk github](https://github.com/Livox-SDK/Livox-SDK2)

#### 1.2 Third Packages

Third packages are included in our gitlab project due to stability issues. Don't use the official packages.

We have made some changes from the original packages.

```sh
git clone https://mirrors.sustech.edu.cn/git/artinx/third_package.git --branch develop
```

##### 1.2.1 livox_ros_driver2

Go to package directory and build it using the `build.sh` script.

```sh
./build.sh ROS2
```

After which, go to workspace directory and use `colcon build --symlink-install` to build the whole packages.

Next, you have to set up static ip for mid-360.Follow the instructions on the [manual](https://terra-1-g.djicdn.com/65c028cd298f4669a7f0e40e50ba1131/Download/update/Livox%20Mid%20Series%20User%20Manual%20(CN).pdf). When you are connected to mid-360, its route would be located at `192.168.1.xx`. Set up your ethernets' ip to `192.168.1.xx` as well(Follow the instructions on this [guide](https://blog.csdn.net/hahalim/article/details/129414327))

If you want to connect to lidar on-boot, use `netplan` to do the job. However, using `netplan` would unable the remote-desktop function. Adding a router to distribute the ip would be a solution, but was not tried yet.

To learn more about mid-360, go to [inofficial mid-360 doc site](https://livox-wiki-cn.readthedocs.io/zh_CN/latest/tutorials/new_product/mid360/mid360.html).

##### 1.2.2 Fast lio

[Fast-lio Github](https://github.com/hku-mars/FAST_LIO)

`Fast-lio` is an odometry predicting algorithm combining IMU and point cloud data. Basically, if you can get the odometry, you can do SLAM(Simultaneously Localization and Mapping) easily.

To completely understand what SLAM is, I recommend you to read through [this book](https://github.com/qomo/LearnSensorFusion/blob/master/books/%E8%A7%86%E8%A7%89slam%E5%8D%81%E5%9B%9B%E8%AE%B2.pdf) written by Bo Gao.

`Fast-lio` is broadcasting several msgs. `/odometry`, `/real_odometry` and `/cloud_registered`. `/odometry` is a stamped msg, showing the position relative to the initial position of lidar.

::: tip

Mid-360 take the pose of the lidar base when initialized as the the horizon plane of its axis. This will cause some problems but somehow solved by little tricks.

:::

We're using fast-lio for ROS2, which is not officially supported. Compared to ROS1, the map accumulating function(save as a map) is not accomplished yet.

#### 1.3 navigation2 (ros2 navigation)

[navigation2 github](https://github.com/ros-planning/navigation2)

Navigation is a huge project related to mountains of researches. 

Building from source is recommended. Follow the official guide.

#### 1.4 sentry_serial_node

`sentry_serial_node` is based on chenjun's RV framework, responsible for communicating with the lower computer.

::: info

We're controlling gimbal to navigate in RMUC2023 due to differential control method. We would change that to controlling chassis in next season.

:::

#### 1.5 Pointcloud to Laserscan

Pointcloud to laserscan is for 2d AMCL. The input is pointcloud msg /`cloud_registered` and the output is laser scan msg`/scan`.

### 2 Tuning and Configuration Guide

~~~flow
```flow
st=>start: Begin
io_livox=>inputoutput: IMU+Lidar Msgs Input
io_serial_in=>inputoutput: Serial Input
target=>operation: Goal
target_cond=>condition: Check if there's a Goal
fast_lio=>operation: Fast_lio
point_cloud_msg=>operation: Filtered Pointcloud and Odometry
costmap=>operation: Local Costmap & Global Costmap,Pointcloud to LaserScan & AMCL
global_path=>operation: Global Path (by navfn or hybrid A*)
controller=>operation: Controller(Differential)
io_serial_out=>inputoutput: Serial Output
ui_position=>operation: Position In RMUC Map

st(bottom)->io_livox->fast_lio->point_cloud_msg->costmap->io_serial_in->target_cond(yes)->global_path->controller->io_serial_out(left)->fast_lio(left)
target_cond(no)->fast_lio(top)
```
~~~

#### 2.1 FAST_LIO

In `config/mid360.yaml`,

```yaml
        preprocess:
            blind: 0.5
            lidar_type: 1                # 1 for Livox serials LiDAR, 2 for Velodyne LiDAR, 3 for ouster LiDAR, 
            scan_line:  4
            timestamp_unit: 3
            scan_rate: 10
```

`blind` is the distant from the lidar origin to the valid data sphere. 

#### 2.2 Sentry Description

The `tf` information is concluded in a `urdf` file. Change the configuration if you want to change the position of lidar on your robot.

#### 2.3 Navigation

[Official Configuration Guide](https://navigation.ros.org/configuration/index.html)

##### 2.3.1 AMCL

AMCL is for relocalization, adjusting the tf between the initial pose of the odometry and 

```yaml
amcl:
  ros__parameters:
    alpha1: 0.2
    alpha2: 0.2
    alpha3: 0.2
    alpha4: 0.2
    alpha5: 0.2
		...
    robot_model_type: "nav2_amcl::DifferentialMotionModel"
		...
    tf_broadcast: true
```

`alphaX`  are the estimation of noise level of your odomtry system, each representing the translational or angular noise.[Further Tuning Guide](https://assets.researchsquare.com/files/rs-225880/v1_covered.pdf?c=1631856303)

Since we're using a really precise odomtry system, we would like to set the all 5 alphas to `0.0005` . If you don't want to use relocalization, set `tf_broadcast` to `false`, and use another node to broadcast the `tf` relationship between the `odom` and `map`.

##### 2.3.2 Controller (DWB)

```yaml
controller_server:
  ros__parameters:
    controller_frequency: 20.0
    min_x_velocity_threshold: 0.001
    min_y_velocity_threshold: 0.5
    min_theta_velocity_threshold: 0.001
    failure_tolerance: 0.3
    ...
    general_goal_checker:
      stateful: True
      plugin: "nav2_controller::SimpleGoalChecker"
      xy_goal_tolerance: 0.25
      yaw_goal_tolerance: 0.25
    # DWB parameters
    FollowPath:
      plugin: "dwb_core::DWBLocalPlanner"
      debug_trajectory_details: True
      min_vel_x: 0.0
      min_vel_y: 0.0
      max_vel_x: 0.26
      max_vel_y: 0.0
      max_vel_theta: 1.0
      min_speed_xy: 0.0
      max_speed_xy: 0.26
      min_speed_theta: 0.0
      acc_lim_x: 2.5
      acc_lim_y: 0.0
      acc_lim_theta: 3.2
      decel_lim_x: -2.5
      decel_lim_y: 0.0
      decel_lim_theta: -3.2
      vx_samples: 20
      vy_samples: 5
      vtheta_samples: 20
      sim_time: 1.7
      linear_granularity: 0.05
      angular_granularity: 0.025
      transform_tolerance: 0.2
      xy_goal_tolerance: 0.25
      ...
```

Either using differential or omnidirectional controller is determined on your parameters. Becareful not to set the yaw value to zero or the controller server would collapse. Rest of the parameters are trivial according to their names.

##### 2.3.3 Costmap

```yaml
local_costmap:
  local_costmap:
    ros__parameters:
      update_frequency: 5.0
      publish_frequency: 2.0
      global_frame: odom
      robot_base_frame: base_link
      rolling_window: true
      width: 3
      height: 3
      resolution: 0.05
      robot_radius: 0.22
      plugins: ["voxel_layer", "inflation_layer"]
      inflation_layer:
        plugin: "nav2_costmap_2d::InflationLayer"
        cost_scaling_factor: 3.0
        inflation_radius: 0.55
      voxel_layer:
        plugin: "nav2_costmap_2d::VoxelLayer"
        enabled: True
        publish_voxel_map: True
        origin_z: 0.0
        z_resolution: 0.05
        z_voxels: 16
        max_obstacle_height: 2.0
        mark_threshold: 0
        observation_sources: scan
        scan:
          topic: /scan
          max_obstacle_height: 2.0
          clearing: True
          marking: True
          data_type: "LaserScan"
          raytrace_max_range: 3.0
          raytrace_min_range: 0.0
          obstacle_max_range: 2.5
          obstacle_min_range: 0.0
```

`robot_radius` can be changed to `footprint` for square robot chassis. [Checkt this](https://navigation.ros.org/configuration/packages/configuring-costmaps.html) for further information.

`raytrace_range` should conclude the `obstacle_range`  in order to rapidly remove the trace of the dynamic obstacle.

Because we're using pointcloud to get costmap, change the datatype and topic under `scan`.

`global_costmap` is same as the `local_costmap`, presenting information for `path` calculation.

### 3 Map

#### 3.1 Make and Save a Map

**Save a 3D map and project it to make a 2D map**

In fast-lio, change the save map parameter from false to true, you will get a 3D pcd file. Then, using `pcd2pgm` [link](https://github.com/Hinson-A/pcd2pgm_package) you can get a 2D map you like.

**Save a 2D map using `/scan` and gmapping**

Using `gmapping` and our `/scan` topic, you can save a map using map_saver.

#### 3.2 The Projection from Actual Map and Referee System

The manipulator of the sentry will pass a point on the Referee System which is different from position of the real terrain. I used Least Square to calculate the linear projection.

 

