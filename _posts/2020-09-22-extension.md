---
title: "[Swift] 익스텐션"
share: false
toc: true
toc_sticky: true
categories:
- swift
---

## 익스텐션  
 구조체, 클래스, 열거형, 프로토콜에 새로운 기능을 추가할 수 있는 강력한 기능이다.  
 타입에 새로운 기능을 추가할 수 있지만 기존에 있는 기능을 재정의하는 것은 불가능하다.  
 
## 문법  
```swift
extension 확장할 타입 이름{
    // 구현
}
extension 확장할 타입 : 프로토콜A, 프로토콜B {
    // 구현
}
```
위에 있는 형식으로 `extension`키워드를 사용해서 구현을 하고  
아래의 코드 처럼 여러 프로토콜을 준수하면서 `extension`을 쓸 수 있다.  
## 추가할 수 있는 기능  
### 연산 프로퍼티  
타입에 연산 프로퍼티를 추가할 수 있다.  
```swift
extension Int {
    var even : Bool{
        return self % 2 == 0
    }  // 짝수 인지 판별해주는 연산 프로퍼티 
    var odd : Bool{
        return self % 2 == 1
    }  // 홀수 인지 판별해주는 연산 프로퍼티
}
print(8.even) // true
print((-3).even) // false
```
### 메서드  
타입에 메서드를 추가할 수도 있다.  
```swift
extension Int {
    func plusN(num : Int) -> Int{
        return self + num
    }
    mutating func plusNSelf(num : Int){
        self += num
    }
}
print(3.plusN(num : 10))  // 13
var number : Int = 5
print(number)
number.plusNSelf(num: 2)
print(number)  // mutating이므로 값이 유지가 된다 == 7
```
```swift
struct Pos{
    var x : Int
    var y : Int
}
extension Pos{
    static func + (left : Pos, right : Pos) -> Pos{  // + 연산자도 구현이 가능하다.
        return Pos(x : left.x + right.x, y : left.y + right.y)
    }
}
var pos_one : Pos = Pos(x : 2, y : 3)
var pos_two : Pos = Pos(x : 5, y : -2)
print(pos_one + pos_two)  // (7, 1)
```
### 이니셜라이저  
익스텐션을 통해 이니셜라이저도 추가할 수 있다.  
익스텐션으로 클래스 타입에 편의 이니셜라이저는 추가할 수 있지만, 지정 이니셜라이저는 추가할 수 없다.  
```swift
extension String{
    init(type_one : Int){
        self = "\(type_one)"
    }
    init(type_two : Double){
        self = "\(type_two)"
    }
}
var int_type : String = String(type_one : 10)
var double_type : String = String(type_two : 10.5)
print(int_type, double_type)  // 10  10.5
```
### 서브스크립트  
서브스크립트도 추가가 가능하다.  
```swift
extension String{
    subscript(repeatNum : Int) -> String{
        var temp : String = ""
        for _ in 0..<repeatNum {
            temp += self
        }
        return temp
    }
}
extension Int{
    subscript(mul : Int) -> Int{
        return self * mul
    }
}
print("ABD"[3]) // ABDABDABD
print(3[5]) // 15
```
### 중첩 데이터 타입  
타입에 중첩 데이터 타입도 추가할 수 있다.  
```swift
extension Int{
    enum EOCheck{
        case Odd, Even, Zero
    }
    var Check : EOCheck{
        switch self{
        case 0:
            return .Zero
        case let x where x % 2 == 0:
            return .Even
        default:
            return .Odd
        }
    }
}
print(6.Check) // Even
print(5.Check) // Odd
print(0.Check) // Zero

func printOddEven(numbers : [Int]){
    for num in numbers{
        switch num.Check{
        case .Even:
            print("E", terminator : "")
        case .Odd:
            print("O", terminator : "")
        case .Zero:
            print("Z", terminator : "")
        }
    }
}
printOddEven(numbers: [-5, -2, 0, 4, 5])
// OEZEO
```
