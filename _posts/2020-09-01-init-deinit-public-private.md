---
title: "[Swift] 인스턴스 생성/소멸, 접근 제어"
share: false
toc: true
toc_sticky: true
categories:
- swift
---

## 인스턴스 생성 / 소멸
### 인스턴스 생성  
클래스, 구조체, 열거형 등에서 `ìnit()` 키워드를 이용해 initialize 할 수 있다.  
따로 반환값은 없다 (단순히 초기화를 위함)   
```swift
class A {
    /*
     some code
     */
    init(){
        // initialize
    }
}
struct B {
    /*
     some code
     */
    init() {
        // initialize
    }
}
enum C{
    /*
     some code
     */
    init() {
        // initialize
    }
}

```
- #### 기본적인 initialize  
	- `init()`을 작성하게 되면 인스턴스가 생성이 될 때 동작을 하여 초기화를 진행해준다.  
```swift
class Person {
    var age : Int
    var name : String
    init() {
        self.age = -1
        self.name = "Johndoe"
    }
}
class Person2 {
    var age : Int = -1
    var name : String = "Johndoe"  // init() 없이 초기화도 가능하다.
}
var p1 : Person = Person()
print(p1.age, p1.name) // -1, Johndoe
```    

- #### init with 매개변수  
	- `init` 에도 매개변수가 있을 수 있다.    
```swift
class Person {
    var circle : Double
    init(r radius : Double){
        circle = radius * radius * 3.14
    }
    init(setR r : Double){
        self.circle = r
    }
    init(val : Double){
        circle = val
    }
    init(_ val : Double){
        circle = val
    }
}
var pr : Person = Person(r: 10.0)
print(pr.circle)  // 314.0
var pr_2 : Person = Person(setR : 150.0)
print(pr_2.circle) // 150.0
var pr_3 : Person = Person(val : 10.0)
print(pr_3.circle) // 10.0
var pr_4 : Person = Person(15.0)
print(pr_4.circle) // 15.0
var pr_5 : Person = Person()  // init() 함수가 없으므로 오류
```  


- #### 옵셔널 초기화  
	- 초기화 할 때 값을 바로 초기화하기 어려운 경우나 값이 안주어질 수 있는 경우 옵셔널을 통해서 나중에 값을 할당할 수 있다.  
```swift
class customer{
    var age : Int?
    var height : Double
    init(height:Double){
        self.height = height
    }
}
var cone : customer = customer(height:180.0)
print(cone.height) // 180.0
print(cone.age) // nil
```
- #### 구조체에서의 이니셜라이저  
	- 클래스와는 다르게 구조체에서는 멤버와이즈 이니셜라이저를 제공한다.  
	- 사용자 정의 이니셜라이저를 구현하지 않으면 프로퍼티 이름으로 매개변수를 갖는 멤버와이즈 이니셜라이저가 제공된다.   
```swift
struct Person{
    var age : Int = 0
    var height : Double = 0.0
}
let p_one : Person = Person(age : 20, height : 180.0)
var p_two : Person = Person()
var p_three : Person = Person(age : 25)  // 변수 일부만 초기화가 가능하다
var p_four : Person = Person(height: 180.0)
print(p_one, p_two, p_three, p_four)
// Person(age: 20, height: 180.0) Person(age: 0, height: 0.0) Person(age: 25, height: 0.0) Person(age: 0, height: 180.0)
```
- #### 실패 가능한 initializer  
	- 이니셜라이저를 정의할 때 잘못된 데이터로 정의할 수 있는 경우처럼 이럴 때는 인스턴스를 초기화하는데 실패할 수 있다.
	- 이 때 이니셜라이저로 처리할 수 있는 것을 실패 가능한 이니셜라이저로 부르며 `init`대신 `init?`키워드를 사용한다.  
```swift
class Person{
    var age : Int
    var height : Double?
    init?(age : Int){ // init?으로 잘못된 값이 들어올 경우를 체크해준다.
        if age < 0{
            return nil
        }
        self.age = age
    }
    init?(age : Int, height : Double){
        if height < 0.0 && age < 0{
            return nil
        }
        self.age = age
        self.height = height
    }
}
var p_one : Person? = Person(age : 20, height : 180.0)
if let p : Person = p_one{
    print(p.age) // 20
}
else{
    print("NIL")
}
var p_two : Person? = Person(age : -2)
if let p : Person = p_two{
    print(p)
}
else{
    print("NIL")  // NIL
}
```


### 인스턴스 소멸
클래스에서 인스턴스는 디이니셜라이저로 구현할 수 있다.  
키워드는 `deinit` 을 쓰며 매개변수나 소괄호도 포함하지 않는다.  
```swift
class Person{
    deinit{
        print("DELETED")
    }
}
var p_one : Person? = Person()
p_one = nil
// DELETED 출력
```



## 접근 제어  
객체지향에서 은닉화(encapsulation)에 해당하는 개념으로 상호간의 정보를 숨기거나 공개하는 범위를 설정할 수 있다.  
상위 요소보다 하위 요소가 더 높은 접근 수준을 가질 수 없음  
> private으로 구현된 구조체 내부에서 public의 값을 가질 수 없음  
> 함수의 매개변수로 특정 접근수준이 부여된 타입이 전달/반환이 되면 그 타입의 접근수준보다 함수의 접근 수준이 높게 설정될 수 없음  
> 함수 뿐만 아니라 튜플의 내부 요소 타입도 튜플의 접근수준보다 같거나 높아야 함  

open &nbsp;&nbsp;&nbsp;&nbsp; public  &nbsp;&nbsp; internal &nbsp;&nbsp; fileprivate &nbsp;&nbsp;private  
<-------- &nbsp;&nbsp;&nbsp;높음 &nbsp;&nbsp;&nbsp;&nbsp; (접근도) &nbsp;&nbsp; &nbsp;&nbsp;낮음&nbsp;&nbsp;&nbsp; --------->  


- ### 개방 접근 수준 (open)
	-  클래스와 클래스의 멤버에서만 사용 가능  
	- 해당 클래스를 다른 모듈에서도 부모 클래스로 사용한다는 목적  
	- 해당 멤버가 정의된 모듈 밖의 다른 모듈에서도 재정의 가능  
	- 범위 : 모듈 외부까지  
- ### 공개 접근 수준 (public)  
	- 어디서든 쓰일 수 있음  
	- 구현되어있는 소스파일, 모듈, 모듈을 가져다 쓰는 곳에서 사용 가능  
	- 범위 : 모듈 외부까지  
- ### 내부 접근 수준 (internal)  
	- 모든 요소에 기본적으로 할당되어 있는 접근 수준이다.  
	- 키워드는 생략 가능하다  
	- 범위 : 모듈 내부  
- ### 파일 외부 비공개 접근 수준 (fileprivate)  
	- 그 요소가 구현된 소스파일 내에서만 사용 가능  
	- 범위 : 파일 내부  
- ### 비공개 접근 수준 (private)  
	- 가장 작은 범위이다.  
	- private이 할당 된 범위에서만 사용 가능  
	- 같은 소스 파일 내에 구현된 다른 기능에서 사용 불가능  
	- 범위 : 기능 정의 내부  
- ### private vs fileprivate
	- fileprivate은 같은 파일 어떤 코드에서 접근이 가능하지만 private은 같은 파일 내부에 다른 코드가 있더라도 접근이 불가능  
	- 익스텐션 기능을 활용해 private에 접근할 수 있다.  

open &nbsp;&nbsp;&nbsp;&nbsp; public  &nbsp;&nbsp; internal &nbsp;&nbsp; fileprivate &nbsp;&nbsp;private  
<-------- &nbsp;&nbsp;&nbsp;높음 &nbsp;&nbsp;&nbsp;&nbsp; (접근도) &nbsp;&nbsp; &nbsp;&nbsp;낮음&nbsp;&nbsp;&nbsp; --------->
