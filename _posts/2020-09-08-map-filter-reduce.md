---
title: "[Swift] Map, Filter, Reduce"
share: false
toc: true
toc_sticky: true
categories:
- swift
---

스위프트에서는 함수를 일급 객체로 취급을 하기 때문에 함수를 다른 함수의 인자로 전달할 수 있다.   
매개변수로 함수가 전달이 되는 것을 ***고차함수***라고 하는데 대표적으로 맵, 필터, 리듀스가 있다.
## 맵 (Map)
맵은 자신을 호출할 때 매개변수로 전달된 함수를 실행하여 그 결과를 다시 반환해주는 함수이다.  
배열, 딕셔너리, 세트, 옵셔널 등에서 사용이 가능하다.  
기존 데이터는 변경되지 않고 새로운 데이터가 생성이 되어서 반환이 되므로 맵은 기존 데이터를 변형하는데 많이 사용된다.  
[클로저 표현식](https://seungchulee.github.io/swift/closure/#%ED%81%B4%EB%A1%9C%EC%A0%80-%EA%B0%84%EC%86%8C%ED%99%94)을 통해서 더 간략화할 수도 있다.  
```swift
let data : [Int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var data_double : [Int] = data.map({ (number:Int) -> Int in
    return number * 2
})
data_double = data.map({ return $0 * 2})
data_double = data.map({$0 * 2})
data_double = data.map() {$0 * 2}
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]으로 다 동일함 
```
만약 동일한 동작을 클로저가 여러 번 수행이 된다면 미리 선언을 하고 호출을 해도 괜찮다.  
```swift
let data : [Int] = [1, 2, 3, 4]
let data_two : [Int] = [5, 6, 7, 8]
let multiple : (Int) -> Int = { $0 * 2 }
var data_double = data.map(multiple) // [2,4,6,8]
var data_two_double = data_two.map(multiple) // [10, 12, 14, 16]
```


또한 맵은 배열 말고 다양한 타입에서도 사용이 가능하다.  
```swift
let dict: [String: Int] = [ "a": 1, "b": 2 ]
var out = dict.map { (key, value) in
  return "\(key)=\(value)"
}
print(out) // ["a=1", "b=2"]
```
## 필터 (Filter)
데이터 내부의 값을 어떠한 조건에 의해 걸러서 추출을 해서 반환을 해주는 함수이다.  
함수의 반환 타입은 반드시 `Bool`타입이다.  
```swift
let data : [Int] = [1,2,3,4,5,6,7,8,9,10]
var out : [Int] = data.filter({ (number : Int) -> Bool in
    return number % 2 == 0  // 짝수를 걸러주는 조건
})
print(out)  // [2,4,6,8,10]
var out : [Int] = data.filter{$0 % 2 == 0}  // 간략하게도 쓸 수 있다.
```
맵과 필터를 사용해서 데이터를 새로 가공해 낼 수도 있다.  
```swift
let data : [Int] = [1,2,3,4,5,6,7,8,9,10]
var out : [Int] = data.map({$0 * 3}).filter{$0 % 2 == 0}
// 3을 곱하고 짝수를 뽑아낸다.
print(out) // [6, 12, 18, 24, 30]
```
## 리듀스 (Reduce)
리듀스는 데이터의 내부 데이터들을 하나로 합하는 고차함수이다.  
배열이라면 배열의 모든 값을 클로저의 연산 결과로 합해준다.  
리듀스에는 2가지를 사용할 수 있다.  
- 리듀스 1  
클로저가 각 요소를 전달받아 연산하고 그 결과를 다음 클로저 실행을 위해 반환한다.  
```swift
public func reduce<Result>(_ initialResult: Result,
                           _ nextPartialResult: (Result, Element) throws -> Result) rethrows -> Result
```
`initialResult`라는 초기값을 지정해주고 `nextPartialResult를` 통해 클로저를 전달받게 된다.  
`nextPartialResult` 클로저의 첫번째 매개변수는 초기값 또는 이전 클로저의 결과값이다.  
두 번째 매개변수는 리듀스 메서드가 동작하는 동안의 요소이다.  
```swift
let numbers: [Int] = [1, 2, 3]
var sum: Int = numbers.reduce(0, { (result: Int, element: Int) -> Int in  // 초기값 : 0
    print("\(result) + \(element)")
    // 0 + 1
    // 1 + 2
    // 3 + 3
    return result + element
})
print(sum)  // 6
```
```swift
let numbers: [Int] = [1, 2, 3]
var sumFromThree: Int = numbers.reduce(3) {  // 클로저를 간단하게도 가능  
    print("\($0) + \($1)")
    // 3 + 1
    // 4 + 2
    // 6 + 3
    return $0 + $1
}
print(sumFromThree) // 9
```
문자열 배열도 reduce를 이용해 연산을 할 수 있다.  
```swift
let names: [String] = ["A", "B", "C", "D"]
// 초기값 : stephen's friend : 
let reduceNames: String = names.reduce("stephen's friend : ") {
    return $0 + ", " + $1
}
print(reduceNames)  // stephen's friend : , "A", "B", "C", "D"
```

- 리듀스 2  
클로저가 따로 결과값을 반환하지 않지만 `inout` 변수를 사용해 초기값에 직접 연산을 한다.  
```swift
public func reduce<Result>(into initialResult: Result,
                           _ updateAccumulatingResult: (inout Result, Element) throws -> () rethrows -> Result)
```
updateAccumulatingResult 로 전달받는 첫번째 매개변수는 초기값 혹은 이전에 실행된 클로저로 인해 변경된 결과값이다.  
두 번째 매개변수는 리듀스 메서드가 동작하는 동안 요소이다.
```swift
let numbers: [Int] = [1, 2, 3]
// 초기값이 0이다.
// 클로저의 값을 반환하지 않고 내부에서 값을 변경한다.  
var sum = numbers.reduce(into: 0, { (result: inout Int, element: Int) in
    // 0 + 1
    // 1 + 2
    // 3 + 3
    print("\(result) + \(element)")
    result += element
})
print(sum)  // 6
```
