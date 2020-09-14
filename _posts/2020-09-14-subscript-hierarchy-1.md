---
title: "[Swift] Subscript, 상속-1"
share: false
toc: true
toc_sticky: true
categories:
- swift
---

## 서브 스크립트
서브 스크립트는 클래스, 구조체, 열거형 타입의 요소에 접근하는 단축 문법이다.  
그래서 서브 스크립트는 별도로 구현을 하지 않아도 인덱스를 통해 데이터에 접근을 할 수 있다.  
Array에 접근할 때는 `array[idx]`처럼 사용하고 딕셔너리에 접근할 때는 `dict[idx]`처럼 사용할 수 있다.  
서브 스크립트를 여러개 정의할 수 있고 override도 가능하다.  
### 구현  
기본 틀은 아래와 같다.  
```swift
subscript(index: Int) -> Int{
    // 반환 값
}
subscript(index:Int) -> Int{
    get{
        // 반환 값
    }
}

```

아래의 코드 처럼 subscript를 지정을 해서 구현도 가능하다.  
```swift
struct TimesTable {
    let multiplier: Int
    subscript(index: Int) -> Int {
        return multiplier * index
    }
}
let threeTimesTable = TimesTable(multiplier: 3)
print("six times three is \(threeTimesTable[6])")
// six times three is 18
```
그리고 아래처럼 복수의 subscript를 지정할 수도 있다.
```swift
struct TimesTable {
    let multiplier: Int
    subscript(index: Int) -> Int {
        return multiplier * index
    }
    subscript(index: String) -> String{
        return "index is " + index
    }
}
let threeTimesTable = TimesTable(multiplier: 3)
print(threeTimesTable["one"])
// index is one
```

### 타입 서브스크립트  
위에서 말한 서브 스크립트는 인스턴스에서 사용할 수 있는 서브 스크립트이다.  
그에 반해 타입 서브 스크립트는 타입 자체에서 사용할 수 있는 서브 스크립트다.  
앞에 `static` 키워드를 이용해 정의할 수 있고 클래스에서는 `class` 키워드를 사용할 수 있다.  
```swift
enum School: Int{
    case elementary = 8
    case middle = 14
    case high = 17
    static subscript(age: Int) -> School?{
        return Self(rawValue: age)
// return School(rawValue: age)로도 쓸 수 있다.
    }
}
```
## 상속  
클래스는 자신이 갖고 있는 메서드나 프로퍼티 등을 다른 클래스로 상속 할 수 있고 다른 클래스로부터 상속 받을 수도 있다.  
그래서 상속 되는 클래스 사이에는 부모 - 자식 간의 관계가 생긴다.  
자식 클래스는 부모 클래스로 부터 물려 받은 메서드를 호출할 수 있고 프로퍼티에 접근도 할 수 있다.  
또한 그 메서드나 프로퍼티 등을 재정의할수도 있다.  

### 클래스 상속  
클래스를 상속하는 방식은 아래와 같다.  
```swift
class 클래스 : 부모클래스 {
    // 코드
}
```
```swift
class Person {
    var name : String
    var age : Int
    var myname : String {
        return "이름은 \(self.name) 입니다"
    }
    func myage() -> Void {
        print("나이는 \(self.age)살 입니다")
    }
    init(_ name:String, _ age:Int){
        self.name = name
        self.age = age
    }
}
class newPerson : Person{ // Person 클래스 상속
    func speak(){
        print("말말말말")
    }
}
var stephen : Person = Person("Stephen", 26)
var sue : newPerson = newPerson("Sue", 24)
sue.speak()  // 말말말말
sue.myage()  // 나이는 24살 입니다
// 부모 클래스 메서드 사용 가능
```  
### 재정의  
자식 클래스는 부모 클래스로부터 대부분을 물려받는데 이를 그대로 사용하지 않고 자신만의 방식으로 **재정의**할 수도 있다.  
재정의를 위해서는 `override`키워드를 사용해야 한다.   
재정의를 하고 자식클래스에서 재정의 된 특성이 아닌 부모 클래스를 쓰고 싶을 때는 `super`키워드를 통해 접근할 수 있다.  
#### 메서드 재정의  
```swift
class Person {
    var name : String
    var age : Int
    var myname : String {
        return "이름은 \(self.name) 입니다"
    }
    func myage() -> Void {
        print("나이는 \(self.age)살 입니다")
    }
    init(_ name:String, _ age:Int){
        self.name = name
        self.age = age
    }
}
class newPerson : Person{ // Person 클래스 상속
    override func myage(){  // override 키워드를 통해 메서드 재정의
        print("저의 나이는 \(self.age)살 일까요")
    }
    func newmyName() {
        print(super.myname)  // super를 통해서 부모 클래스에 접근
    }
}
var stephen : Person = Person("Stephen", 26)
var sue : newPerson = newPerson("Sue", 24)
sue.myage()  // 저의 나이는 24살 일까요
sue.newmyName()  // 이름은 Sue 입니다
```
#### 프로퍼티 재정의  
```swift
class Person {
    var name : String
    var age : Int = 0
    var myname : String {
        return "이름은 \(self.name) 입니다"
    }
    func myage() -> Void {
        print("나이는 \(self.age)살 입니다")
    }
    init(_ name:String, _ age:Int){
        self.name = name
        self.age = age
    }
}
class newPerson : Person{ // Person 클래스 상속
    override var myname : String { // Person의 myname 프로퍼티 재정의
        return "나는 " + super.name
    }
}
var stephen : Person = Person("Stephen", 26)
var sue : newPerson = newPerson("Sue", 24)
print(sue.myname)  // 나는 Sue
```
#### 서브 스크립트 재정의  
```swift
class Student{
    var name : String = ""
    var age : Int = 0
}
class Person {
    var students : [Student] = [Student]()
    subscript(number:Int) -> Student{
        print("Person subscript execute")
        return students[number]
    }
}
class Person_Two : Person{
    var students_two : [Student] = [Student]()
    override subscript(number:Int) -> Student{ // subscript 재정의
        print("Person_Two execute")
        return students_two[number]
    }
}
var stephen : Person = Person()
stephen.students.append(Student())
print(stephen[0]) // Person subscript execute

var sue : Person_Two = Person_Two()
sue.students_two.append(Student())
print(sue[0]) // Person_Two execute

```
#### 재정의 방지  
자식 클래스에서 부모 클래스의 특성을 재정의 하려 할 때 부모 클래스에서 재정의를 원하지 않는 다면 `final` 키워드를 사용하면 된다.  
`final var, final func, final class, final subscript`처럼 사용하면 된다.  
```swift
final class Person {  // class 자체를 final로 지정했다. 아무한테도 상속이 안된다.
    var name : String
    var age : Int = 0
    var myname : String {
        return "이름은 \(self.name) 입니다"
    }
    func myage() -> Void {
        print("나이는 \(self.age)살 입니다")
    }
    init(_ name:String, _ age:Int){
        self.name = name
        self.age = age
    }
}
class newPerson : Person{ // Person이 final 이므로 재정의 불가
    override var myname : String { // Person 자체가 재정의 불가 이므로 myname 또한 재정의 불가능하다.
        return "나는 " + super.name
    }
}
```
```swift
class Person {
    var name : String
    var age : Int = 0
    final var myname : String { // 프로퍼티를 final로 재정의 해서 자식 클래스에서 재정의가 불가능하다.
        return "이름은 \(self.name) 입니다" 
    }
    func myage() -> Void {
        print("나이는 \(self.age)살 입니다")
    }
    init(_ name:String, _ age:Int){
        self.name = name
        self.age = age
    }
}
class newPerson : Person{
    override var myname : String { // Person의 myname이 final이므로 재정의가 불가능하다. 오류!!
        return "나는 " + super.name
    }
}
```
