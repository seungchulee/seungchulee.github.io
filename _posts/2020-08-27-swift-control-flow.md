---
title: "[Swift] 연산자, 조건문, 반복문"
categories:
- swift
share: false
toc: true
toc_sticky: true
---

## 연산자
swift에도 다양한 연산자가 존재한다.

많은 언어에서 사용하는 사칙연산을 하는 연산자와 비교하는 연산자 그리고 범위 연산자 등 다양한 연산자를 지원한다.

- 할당 연산자  
	- 단순히 말해서 값을 할당할 때 사용하는 연산자이다.  
	- `=`을 사용해서 값을 할당한다.  
	- swift는 safe한 언어로 데이터 타입이 다르면 오류가 발생한다.  
```swift
var a : Int = 10  // 여기서 = 이 할당 연산자이다.
```

- 산술 연산자  
	- 흔히 말하는 사칙연산에 관한 연산자다.  
	- `+, -, *, /, %`가 있으며 많이 쓰이고 의미는 다 똑같다.  
	- overflow를 방지하기 위해서 `&+, &-, &*`도 쓸 수 있다.
	- string에서도 `+`를 쓸 수 있다.  

- 비교 연산자  
	- 두 값을 비교할 때 사용하는 연산자이다.  
	- `==, >=, <=, <, >, !=, ===, !==, ~=`가 쓰인다.  

- 삼항 조건 연산자  
	- 다른 언어에서도 볼 수 있는 삼항연산자와 같은 기능을 한다.  
```swift
var v1 : Int = 10
var v2 : Int = 20
var v3 : String = v1 > v2 ? "Big" : "Small"
print(v3)  // "Small"
```

- 범위 연산자  
	- 이 연산자는 swift에서 나는 처음 봤다.  
	- 범위에 대한 연산자로 python에서 range와 비슷한 기능을 하는거 같다.  
	- `A...B`:  A <= X <= B  
	- `A..<B`: A <= X < B  
	- `A<..B`: A<X<=B  
	- `A...`: A< X  
	- 등 `. <`을 적절히 사용해서 범위를 나타낼 수 있다.  

- Bool 연산자  
	- `!, &&, ||`을 통해 Not, And, Or을 표현할 수 있다.

- 비트 연산자  
	- `~, &, |, ^, >>, <<` 을 통해 Not, And, Or, Xor, Shift을 할 수 있다.

- 복합 할당 연산자  
	- 할당연산자(=)과 다른 연산자를 합쳐서 수행할 수 있다.  
```swift
a += b  // a = a + b
a /= b  // a = a / b
...
// 여러 표현을 쓸 수 있음
```

> 이 외에도 nil 병합 연산자, 부호 변경 연산자, 옵셔널 강제 추출 연산자, 옵셔널 연산자 등 다양한 연산자가 있다.  
연산자 사이에서도 우선순위는 존재하고 또한 swift에서 사용자가 직접 연산자를 정의할 수도 있다.  
복잡한 연산을 수행하는 연산자를 만들게 되면 이는 함수를 실행하는 것보다 훨씬 좋고 가독성에서도 좋을 수 있다.

## 조건문
swift에서의 조건문은 `if...else, switch, guard`가 있다.  
다른 언어에서와 마찬가지로 같은 기능을 수행하고 특징은 if나 switch에서 소괄호는 안써도 상관없지만 중괄호는 반드시 써야한다는 차이점이 있다.  
- if...else 구문  
	- if나 else if에서의 조건은 반드시 Bool 형태만 올 수 있다.  

```swift
var a : Int = 10
var b : Int = 20

if a < b {
print("Small")
}
else if (a == b) {
print("Same")
}
else{
print("Big")
}
```

- switch 구문  
	- switch 역시 소괄호는 안써도 상관 없다.  
	- switch 문에서 하나의 case를 수행하고 계속 진행하고 싶으면 `fallthrough` 키워드를 쓰면 된다.
	- case를 여러개 쓸 수 있고 break를 마지막에 안 적어줘도 되고 where을 통해 조건을 걸 수도 있다.
```swift
var myName : String = "Stephen"
var cond : Bool = false
switch myName {
	case "St", "Tr": // case에 여러 개의 조건을 쓸 수 있다.
			print("I'm not \(myName)")
	case "Dump":
			fallthrough // 이 부분은 수행 안하고 넘어간다.
	case "You" where cond == true: // where문을 사용해서 조건을 걸 수도 있다.
			print("COND")
	case "Stephen":
			print("I'm Stephen")
	default:
			print("WoW")
}
```
	- switch문으로 비교할 수 있는 거에는 Tuple이나 열거형 데이터도 올 수 있다. 

## 반복문  
- swift에서 반복문은 `for, while, repeat-while`문이 있다. (여기서 repeat-while은 다른 언어의 do-while과 같은 역할이다)
- for문  
	- `for 변수 in 시퀀스 형식`으로 이루어져 있다.
```swift
for i in 5...10{
	print(i)  // 5부터 10까지 출력
}
```
	- 배열이나 set 같은 데이터 타입에도 for문을 적용시킬 수 있다.  
```swift
var myArray : [String] = ["A", "B", "C", "D"]
for ch in myArray{
	print(ch)  // 배열 원소들 출력
}
var myDic : [String : Int] = ["A" : 1, "B" : 2, "C" : 3, "D" : 4]  // dictionary도 가능 
for data in myDic{
	print(data)  // ("A", 1), ("B", 2) ... 출력
}
for (key, val) in myDic{
	print("\(key) : \(val)")  // "A : 1", "B : 2" ... 출력
}
```
- while 문
	- while 도 다른 언어에서의 while과 다르지 않다.
	- while문에서 조건문은 반드시 Bool 타입이어야 한다.
```swift
var summ : Int = 0
while summ <= 10 { 
	summ += 1
}
```

- repeat-while문
	- do-while과 다르지 않으며 조건 역시 Bool 타입이어야한다.
```swift
var summ : Int = 0
repeat{
	summ += 1
}while summ <= 10
```

> 반복문에서 여러개의 반복문이 중첩으로 있을 때 break나 continue를 할 때가 있다.
> 이 때 반복문에 이름을 부여할 수 있고 원하는 반복문을 break, continue를 할 수가 있다.  

```swift
var count : Int = 0
loopOne : for i in 1...10{
	print(i)
	loopTwo : for j in 1...10{
		if i + j == 15{
			break loopOne
		}
		if i == 10{
			break loopTwo
		}
	}
}
```
