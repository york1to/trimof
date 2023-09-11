# BASIC_TUTORIALS

## Recommand Tutorials
### 计算机基础

推荐书籍（按照难度排序）：

- [ ] Computer Systems: A Programmer's Perspective (CSAPP)

- [ ] 计算机程序的构造和解释（SICP）

- 计算机组成与设计：硬件/软件接口
- 操作系统概念（恐龙书）
- 程序员修炼之道2：通向务实的最高境界
- 编译原理（龙书）

### C++

基础

- C++ Primer(Plus)
- [于仕琪老师的Bilibili网课](https://www.bilibili.com/video/BV1Vf4y1P7pq)
- C++ Programming Language

进阶

- Effective C++
- More Effective C++
- Effective Modern C++
- Modern C++ Tutorial: C++11/14/17/20 On the Fly
- <https://github.com/AnthonyCalandra/modern-cpp-features>
- <http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines>
- [小彭老师的Bilibili公开课](https://space.bilibili.com/263032155/channel/collectiondetail?sid=53025)

骨灰

- <https://www.youtube.com/user/CppCon>
- <https://www.open-std.org/jtc1/sc22/wg21/docs/papers/>
- <http://purecpp.org/>

### Linux/Git/Shell

- <https://git-scm.com/docs/user-manual>
- <https://linuxtools-rst.readthedocs.io/zh_CN/latest/>

## 快速跳转

- [cppreference](https://en.cppreference.com/w/)
- [glm manual](https://github.com/g-truc/glm/blob/master/manual.md) or [Opengl-glm](https://nas.artinx.club:5001/sharing/q01EttQss)
- [OpenCV doc](https://docs.opencv.org/4.x/)
- [规则手册](https://www.robomaster.com/zh-CN/resource/pages/announcement/1370)

# CheckList
## C++ 

##### Data Type

- [x] 基本数据类型（void,bool,各类整型和浮点,指针）
- [x] 定长整型(int64_t),size_t,ptrdiff_t
- [x] std::numeric_limits
- [x] 和类型union
- [x] 积类型struct
- [ ] array
- [ ] 内存对齐
- [ ] sizeof/alignof/alignas
- [x] Pointer&Reference
- [x] nullptr
- [x] literals of ints/floats/strings
- [x] user-defined literals
- [ ] const specifier and const_cast

##### Data Flow

- [ ] 整型/浮点的基本运算
- [ ] operator precedence
- [ ] 短路求值&&/||
- [ ] 逗号运算符,和三目运算符?:
- [ ] static_cast and reinterpret_cast

##### Basic Control Flow

- [x] if/else/else if
- [x] for
- [x] switch
- [x] while/do-while
- [x] continue/break
- [x] return

##### Function

- [ ] declaration/definition
- [ ] function pointer/type of function pointer
- [ ] overload

##### Class

- [ ] (static) data members/member functions
- [ ] member access specifiers: private/protected/public/friend
- [ ] this pointer
- [ ] special member functions: default constructor/copy constructor/copy assignment/move constructor/move assignment/destructor
- [ ] default/delete specifier
- [ ] derived class
- [ ] abstract class/virtual function/pure virtual function
- [ ] virtual destructor
- [ ] const member function/mutable specifier
- [ ] rule of 350
- [ ] operator overloading
- [ ] explicit converting constructor

##### Basic Templates

- [ ] template functions
- [ ] template classes
- [ ] template argument deduction
- [ ] explicit specialization
- [ ] auto deduction
- [ ] trait helper class
- [ ] SFINAE(std::enable_if_t/std::is_same_v)
- [ ] dependent names
- [ ] decltype
- [ ] type_traits
- [ ] type alias (typedef and using)

##### Exceptions

- [ ] stack unwinding when exception raises
- [x] throw/catch
- [ ] std::exception
- [ ] built-in exception types
- [ ] catch(const T&)
- [ ] catch(...)
- [ ] RTTI in catching
- [ ] noexcept specifier
- [ ] rethrow
- [ ] exception in destructor

##### Right value reference/universal reference

- [ ] left value reference vs right value reference
- [ ] pass by value and std::move
- [ ] Universal reference(T&& and auto&&) and std::forward

##### Memory management

- [x] malloc/free
- [x] new/delete
- [x] new[]/delete[]

##### RAII

- [ ] ownership of resources
- [ ] how to write correct copy/move constructor/assignment
- [ ] std::unique_ptr/std::shared_ptr

##### RTTI

- [ ] dynamic_cast
- [ ] typeid and std::type_info

##### Lambda function

- [ ] lambda function definition
- [ ] closure(capture by value/reference/move)
- [ ] capture this
- [ ] std::function and type erasing and recursion

##### Multiple file compilation

- [ ] lifetime of static variables
- [ ] linkage
- [ ] namespaces
- [ ] extern specifier & anonymous namespaces
- [ ] main() entry

##### Miscellaneous

- [ ] structured binding
- [ ] constexpr
- [ ] std::initializer_list
- [ ] assert/static_assert

## Library

##### Utilities & Diagnostics

- [ ] std::abort
- [ ] std::exit
- [ ] std::quick_exit
- [ ] SIGSEGV/SIGFPE/SIGINT

##### Time

- [ ] Clocks/Durations/Time Points
- [ ] std::chrono::high_resolution_clock
- [ ] time_since_epoch

##### String

- [ ] ASCII & Unicode
- [ ] code points & encodings
- [ ] std::string
- [ ] std::to_string/fmt::format
- [ ] std::stringstream

##### Containers & Iterators

- [ ] [begin,end)
- [ ] const iterators and reverse iterators
- [ ] iterator traits
- [ ] range-for
- [ ] sequence containers: list/vector
- [ ] std::unordered_set/std::unordered_map
- [ ] iterator invalidation & Member function table

##### Helper Types

- [ ] std::pair & std::tuple
- [ ] std::any
- [ ] std::optional (std::nullopt)
- [ ] std::variant (std::monostate)

##### Algorithm

- [ ] Non-modifying sequence operations
- [ ] Modifying sequence operations
- [ ] std::sort
- [ ] Minimum/maximum operations

##### IO Library

- [ ] std::istream/std::ostream
- [ ] std::fstream
- [ ] std::cin/std::cout
- [ ] std::endl/std::flush
- [ ] ANSI color escape sequences

##### Filesystem

- [ ] path
- [ ] exists/is_regular_file
- [ ] create/remove files/directories
- [ ] directory_iterator & recursive_directory_iterator

##### Regex

- [ ] regular expressions (grammar & verifying)
- [ ] std::regex
- [ ] std::regex_match
- [ ] std::regex_search

##### Threading

- [ ] std::thread (argument passing, join, detach)
- [ ] std::thread::hardware_concurrency
- [ ] std::this_thread::get_id/sleep/yield
- [ ] std::mutex & std::lock_guard
- [ ] std::shared_mutex & std::shared_lock & std::unique_lock
- [ ] std::atomic_xxx & CAS

##### Numerics

###### cmath

- [ ] abs/fabs
- [ ] fmax/fmin
- [ ] Exponential functions
- [ ] Power functions
- [ ] Trigonometric functions (atan2)
- [ ] Nearest integer floating point operations

###### random

- [ ] engines & distributions & seed
- [ ] std::mt19937_64
- [ ] uniform distribution

## Normalization

- [ ] 代码格式规范
- [ ] 参数传递规范
- [ ] 命名规范

# Visual Studio

- [ ] 构建cmake项目并运行程序
- [ ] 调试/断点/单步/查看中间变量
- [ ] 运行测试

# CMake

- [ ] cmake版本约束
- [ ] cmake全局变量
- [ ] Compiler/OS/BuileType判断
- [ ] 增加executable
- [ ] vcpkg包管理
- [ ] ctest
- [ ] cmake命令行

# vcpkg

- [ ] vcpkg安装/更新/卸载/列举包
- [ ] 集成vcpkg到VS中
- [ ] 集成vcpkg到cmake中

# git

- [ ] gitlab的使用
- [ ] git add/commit/push/pull
- [ ] git merge

# OpenCV

- [ ] RGB/HSV色彩空间

- [ ] image/video读写
- [ ] cv::Mat使用
- [ ] cv::inRange/cv::threshold/cv::cvtColor
- [ ] cv::erode/cv::dilate/cv::findContours
- [ ] PowerToys的ColorPicker使用

# glm

- [ ] OpenGL右手坐标系
- [ ] glm::vec2/glm::vec3/glm::vec4/glm::mat3/glm::mat4的基本使用
- [ ] matrix_transform
- [ ] quaternion glm::quat
- [ ] glm::perspective/glm::lookAt
- [ ] constants.hpp

# CAF

- [ ] actor model
- [ ] actor spawing
- [ ] actor messaging

# documentation

- [ ] 检索cppreference.com
- [ ] 检索opencv文档
- [ ] 检索cmake文档
- [ ] 检索glm文档

