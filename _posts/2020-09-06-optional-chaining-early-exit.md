---
title: "[Swift] 옵셔널 체이닝, 빠른 종료"
share: false
toc: true
toc_sticky: true
categories:
- swift
---

## 옵셔널 체이닝  
옵셔널을 반복 사용해서 서로 얽혀있는 옵셔널 중 하나라도 값이 존재하지 않으면 nil을 반환하게 하는 방식이다.  
```swift
let p_one : Person = Person(name:"Stephen")
if let roomNumber: Int = p_one.address?.building?.room?.number{  // optional chaining 방식  
    print(roomNumber)
}
else{
    print("No Room")
}
```
위의 코드에서 if 안에 구문을 보면 옵셔널 바인딩을 이용해서 접근을 하고 있는 것을 알 수 있다.  
그런데 만약 옵셔널 중 하나라도 값이 없으면 `No Room`을 출력할 것이고 값이 다 있으면 번호를 출력하게 될 것이다.  
또한 옵셔널 체이닝을 통해 값을 할당하는 것과 메서드를 호출하는 것도 가능하다.  
Array나 Dictionary에서 옵셔널의 서브 스크립트를 사용할 때는 대괄호 보다 앞에 물음표를 표기해줘야한다.  
```swift
var testScores = ["Dave": [86, 82, 84], "Bev": [79, 94, 81]]
testScores["Dave"]?[0] = 91
testScores["Bev"]?[0] += 1  // 대괄호 앞에 ?을 붙여준다.  
```

## 빠른 종료
빠른 종료 (Early Exit)에서는 `guard` 키워드를 쓴다.  
`guard`는 if 문 처럼 Bool 타입이 조건으로 들어가고 else가 필수로 쓰인다.  
`guard` 뒤의 조건이 false라면 else의 내부 코드를 실행하게 된다.  
이 때 else 내부에는 자신보다 상위의 코드를 종료하는 코드가 들어가게 된다.  
`return, break, continue, throw, fatalError()` 등의 명령을 사용하게 된다.
```swift
for i in 0...10{
    guard i % 2 == 1 else{
        continue
    }
    print(i)
}
// 1, 3, 5, 7, 9 출력 
```
`guard`의 조건으로 Bool타입을 쓸 수 있지만 옵셔널 바인딩의 역할도 할 수 있다.  
```swift
func greet(person: [String: String]) {
    guard let name = person["name"] else {
        return
    }
    print("Hello \(name)!")
    guard let location = person["location"] else {  // 옵셔널 바인딩 역할 가능  
        print("I hope the weather is nice near you.")
        return
    }
    print("I hope the weather is nice in \(location).")
}
greet(person: ["name": "John"])
// Prints "Hello John!"
// Prints "I hope the weather is nice near you."
greet(person: ["name": "Jane", "location": "Cupertino"])
// Prints "Hello Jane!"
// Prints "I hope the weather is nice in Cupertino."
```
또한 조건을 여러개 하고 싶으면 `,`로 구분하게 되고 Bool타입이 계속 되어야 하고 이들은 `&&`와 같은 기능을 수행 한다.  
```swift
func greet(person: [String: String]) {
    guard let name = person["name"] else {
        return
    }
    print("Hello \(name)!")
    guard let location = person["location"] , let age = person["age"] else {  // ,을 이용해 조건을 여러개 작성 => &&와 같은 역할  
        print("I hope the weather is nice near you.")
        return
    }
    print("I hope the weather is nice in \(location).")
}
```
> `guard`는 자신을 감싸는 코드 블록이 없거나 `return, break, continue, throw`와 같은 명령어를 쓸 수 없는 상황이면 못쓰게 된다.  
> 함수, 메서드, 반복문에 주로 쓰인다.
