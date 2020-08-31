---
title: "[Swift] 구조체, 클래스, 프로퍼티, 메서드"
categories:
  - swift
share: false
toc: true
toc_sticky: true
---

## 구조체 / 클래스
### 구조체
- 구조체 선언
	- `struct` 키워드 사용  
```swift
struct 구조체 이름 {
 프로퍼티와 메서드들
}
struct customer {
	var name : String
	var weight : Double
} // 예시
```
	- 구조체 생성 및 초기화
```swift
// 구조체 생성
var customer_one : customer = customer(name : "Stephen", weight : 70.0) 
// 상수로도 생성 가능, 단, 내부 내용을 변경할 수는 없음
let customer_two : customer = customer(name : "Johndoe", weight : 68.0)  
customer_one.weight = 71.0
customer_two.weight = 65.0 // 변경 할 수 없음
```

### 클래스
- 클래스 선언
	- `class` 키워드 사용
```swift
class 클래스 이름 {
	프로퍼티와 메서드들
}
class 클래스 이름 : 부모 클래스 이름{
	프로퍼티와 메서드들
}  // 부모 클래스를 상속받을 경우
class customer {
	var name : String = "Stephen"
	var age : Int = 26
	init() {
	self.name = "NoName"
	self.age = 0
    }  // 만약 처음 할당이 안되어 있으면 init()을 할당해준다.
}
```
	- 클래스 생성 및 초기화
```swift
var customer_one : customer = customer()  // 클래스 생성
customer_one.age = 27
let customer_two : customer = customer()
customer_two.name = "Johndoe"
customer_two.age = 25  // let이지만 내부 값을 변경할 수 있다.
```
	- 클래스 소멸  
	`deinit` 키워드 사용  
```swift
class customer {
	var name : String = ""
	var age : Int = 0  
	deinit {
		print("Class Terminated")
	}
}
var customer_one : customer? = customer()
customer_one = nil  // deinit 코드가 수행이 된다.
```

### 구조체와 클래스 공통점
- 공통점   
	- 값을 저장하고 있는 컨테이너이다.  
	- 확장을 할 수 있다.  
	- 구조화된 데이터의 기능을 가진다.  
	- 서브 스크립트를 정의할 수 있다.  
	- 초기화를 정의할 수 있다.  
	- 등등
- 차이점
	- 클래스는 상속 가능하지만 구조체는 그렇지 못하다.  
	- deinit은 클래스에서만 사용 가능하다.  
	- 타입 캐스팅은 클래스에서만 가능하다.  
	- 구조체는 값 타입이고 클래스는 참조 타입이다.  
- 구조체가 더 나을 경우
	- 연관된 간단한 값의 집합을 캡슐화하는 것만이 목절일 경우
	- 캡슐화한 값을 참조하는 것보다 복사하는 것이 나은 경우
	- 구조체에 저장된 프로퍼티가 값 타입이고 참조하는 것 보다 복사하는 것이 나을 경우
	- 다른 타입으로부터 상속 받거나 상속할 필요가 없을 경우
	- 위 네가지 경우를 제외하면 클래스를 사용하는 것이 더 낫다.  


## 프로퍼티, 메서드
### 프로퍼티  
프로퍼티는 구조체, 클래스, 열거형에 관련된 값이다.  
저장 프로퍼티, 연산 프로퍼티, 타입 프로퍼티가 있다.  
- 저장 프로퍼티  
	- 값을 저장하는 프로퍼티이다.  
	- var, let이 사용된다  
	- 옵셔널도 사용이 가능하다.
	- 옵셔널과는 조금 다르지만 `lazy` 키워드 쓸 수 있다.  
		- 호출이 있어야 값을 초기화한다.
		- 불필요한 저장 공간이나 성능 저하를 방지할 수 있다.
		- 주로 var 앞에 사용한다.  
```swift
struct customer {
	var name : String  
	var height : Double // 저장 프로퍼티들이다.
	var age : Int? // 이름과 키는 필수지만 나이는 필수가 아니다.
}
class person {
	var height : Double = 170.0
	var age : Int = 0 // 저장 프로퍼티들이다.
}
```
- 연산 프로퍼티  
	- 값을 저장하는 프로퍼티가 아닌 특정 상태에 따른 연산을 하는 프로퍼티이다.  
	- getter나 setter의 역할을 할 수 있다.  
	- 읽기 전용으로 get 메서드만 사용할 수 있다.  
```swift
struct customer {
    var age : Int
    var height : Double
    var weight : Double
    var possible : customer {
        // 접근자
        get {
            return customer(age: age + 1, height : height + 1.5, weight : weight + 10.0)
        }
        // 설정자
        set(data) {
            age = data.age
            height = data.height
            weight = data.weight
        }
    }
}
var cus : customer = customer(age : 10, height : 180.0, weight : 100.0)
print(cus)  // 10, 180.0, 100.0
print(cus.possible)  // 11, 181.5, 110.0
cus.possible = customer(age : 11, height : 181.0, weight : 90.0)
print(cus)  // 11, 181.0, 90.0
```  
	- 프로퍼티 감시자  
	일반 저장 프로퍼티에서만 사용이 가능하다.  
		- willSet  
			- 전달되는 인자는 프로퍼티가 변경될 값이다.  
			- newValue가 자동 지정됨  
		- didSet  
			- 전달되는 인자는 변경되기 전의 값이다.  
			- oldValue가 자동 지정됨.  
- 타입 프로퍼티  
	- 인스턴스가 아닌 타입 자체에 속하는 프로퍼티  
	- 인스턴스가 공통으로 사용하는(static, constant) 값이나 모든 인스턴스에서 공용으로 접근 가능하고 변경할 수 있는 변수(static) 등을 정의할 때 유용함.  
	- 종류  
		- 저장 타입 프로퍼티 : 변수 / 상수 가능  // 초기값 설정해야함 // 지연 연산 됨
		- 연산 타입 프로퍼티 : 변수만 가능  
```swift
class S_class {
        // 타입 프로퍼티를 타입 상수로 사용 가능
        static let typeletproperty : Int = 10
    // 저장 타입 프로퍼티
    static var typeproperty: Int = 0
    var instanceproperty: Int = 0 {
        didSet {
            S_class.typeproperty = instanceproperty + 100
        }
    }
    // 연산 타입 프로퍼티
    static var typeComputedProperty: Int {
        get {
            return typeproperty
        }
        set {
            typeproperty = newValue
        }
    }
}
S_class.typeproperty = 123
let classInstance: S_class = Aclass()
classInstance.instanceproperty = 100
print(S_class.typeproperty)  // 200
print(S_class.typeComputedProperty)  // 200
```


### 메서드  
메서드는 특정 타입에 관련된 함수.  
- 인스턴스 메서드  
	- 특정 타입의 인스턴스에 속한 함수  
	- 인스턴스 내부의 프로퍼티를 변경하거나 연산 결과를 반환하는 등 인스턴스와 관련된 기능 수행  
	- 만약 구조체나 열거형 내부에서 인스턴스 메서드를 만들고자 할 때는 mutating 키워드를 앞에 붙여서 수행해야 한다.
```swift
class person{
    var age : Int = 26
    var name : String = "Stephen"
    var height : Double = 176.0
    func ageUp(amount:Int) -> Void{  // 인스턴스 메서드
        self.age = age + amount
    }
    func ageDown(amount:Int) -> Void{  // 인스턴스 메서드
        self.age = age - amount
    }
    func sayName() -> Void{  // 인스턴스 메서드
        print("My name is \(self.name)")
    }
}
var p1 : person = person()
p1.ageUp(amount:5)
print(p1.age)  // 31
p1.ageDown(amount:3)
print(p1.age)  // 28
p1.sayName()  // My name is Stephen
```
- 타입 메서드
	- 타입 자체에 호출이 가능한 메서드  
	- 메서드 앞에 `static` 키워드를 사용해 타입 메서드임을 알려줌  
	- `static` 으로 정의하면 상속 후 메서드 overriding 불가.  class로 정의하면 상속 후 메서드 재정의 가능  
```swift
class A{
    static func staticsayName(){
        print("A static")
    }
    class func classsayName(){
        print("A class")
    }
}
class B:A{
    /*override static func staticsayName(){
        오류가 남
        override 불가능함
    }*/
    override class func classsayName(){
        print("B class")
    }
}
```
