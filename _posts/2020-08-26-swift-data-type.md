---
title: "[Swift] 시작, Data Type"
categories:
- swift
share: false
toc: true
toc_sticky: true
---

## swift란?
 - swift는 처음에 safe, modern, powerful을 모토로 가져왔다.
 - 지금은 safe, fast, expressive를 방향성으로 잡고 가는 중이다.
	- safe : 문법을 엄격하게 적용하여 개발자의 실수를 방지, 타입추론은 지원하긴 함.
	- fast : 예전 애플 관련 프로그래밍을 하려고 하면 Objective-C를 배워야 했다. 지금은 Swift를 만들면서 Objective-C에 버금가는 성능을 내려고 하는 중이다.
	- expressive : 그나마 최근에 나온 언어이기 때문에 현대적이고 세련된 문법과 여러 기능들을 지원을 해준다.
 - swift는 함수형 프로그래밍이면서 프로토콜 지향 언어다. ~~(이 부분은 아직 공부가 덜 되었다)~~

## swift에서 변수, 상수를 선언하는 방법
- ### 변수

프로그래밍 언어를 배우면서 가장 기초이면서 많이들 쓰는 변수 선언 방법이다.

지금 내가 아는 언어는 c, python, javascript 정도인데 내가 아는 변수 선언 방법과 많이 다르다.

선언을 할 때는 var 를 쓰고 타입과 값을 할당해 준다.

> var name : type = value 형식으로 되어있다.

예를 들면 var exp : Int = 10 이런 식으로 쓰는 것이다.

**type**부분은 생략할 수는 있지만 (var exp = 10)

이는 글 서두에도 나왔듯이 safe라는 특성을 갖는 swift에서는 되도록이면 안쓰는 것이 낫다고 한다.

```swift
    var name : Int = 10
    var age : Int  // 나중에 할당 가능 (초기화)
    name = 99  // 같은 type이면 재할당도 가능하다
    name = "HAHA"  // 오류가 남
```
   
   - ### 상수
  
   C에서 const처럼 선언을 하는 것 처럼 swift에서도 상수를 선언하는 방식이 있다.
	 
let을 쓰는 방식인데 이는 위에 변수를 선언하는 것처럼 해주면 된다.

```swift
    let pi : Float = 3.14
    pi = 3.3  // 오류가 남
```

   프로그램 전체에서 변하지 않을 값을 상수로 해주는 것이 편하다.

## 데이터 타입

 1. **정수형**
	  - swift에서는 Int와 UInt가 존재한다.
	  - Int는 음수/양수/0, UInt는 양수/0의 정수이다.
	  - Int에는 Int8, Int16, Int32, Int64가 있는데 그냥 Int로 쓰면 자신의 컴퓨터의 사양에 따라서 알아서 정해지게 된다. (UInt도 마찬가지)
	  - 직접 확인해보고 싶으면 `Int.max, Int.min`으로 확인이 가능하다.(UInt도 마찬가지)
	  - 이 타입에는 십진수 뿐만 아니라 2진수, 8진수, 16진수도 가능하다.
```swift
var check : Int = 0xC12 // 16진수
var check : Int = 0b11010 // 2 진수
var check : Int = 0o23125 // 8진수 
```
2. **Bool**
-  true, false의 값을 가진다.
 ```swift
 var tf : Bool = true  // false도 가능
 ```
3. **Float, Double**
	- Float는 32bit 부동 소숫점
	- Double은 64Bit 부동 소숫점
	- 정확성은 Double이 높다.
```swift
var fl : Float = 3.14
var db : Double = 3.14
```
4. **Character**
	- 단 하나의 문자를 저장하기 위함
	- 이모지도 표현할 수 있다
```swift
let usFlag: Character = "\u{1F1FA}\u{1F1F8}" // 🇺🇸
var f_name : Character = "A"
```
5. **String**
	- 말 그대로 문자열을 표현하기 위한 타입이다.
	- Character를 여러개 모은게 String이다. 
	- 	'+'연산이나 append연산을 통해서 문자열을 합칠수도 있다.
```swift
var st : String = "this is string 🙏"
var st : String = "" // 빈 문자열
var st : String = String() // 빈 문자열
st = "A" + "BB"  // st = "ABB"
st.append("DD")  // st = "ABBDD"
st += "F"  // st = "ABBDDF"
```

6. **Any**
	- 무슨 데이터 타입이 들어올 지 모를 때 Any는 아무 데이터 타입을 담을 수 있다.
	- 아무거나 할당해도 되지만 가능한 안쓰는 것이 낫다.
```swift
var any : Any = 10
any = "string?" // 가능함
```
7. **Tuple**
	- 파이썬의 튜플처럼 동작을 한다.
	- 여러가지 타입을 하나로 묶어서 사용할 수 있다.
```swift
var data : (String, Int) = ("Data", 10)
// 데이터 접근 방법 : data.0 => "Data" // data.1 => 10
var today : (day : String, month : Int) = ("Fri", 8)
// 데이터 접근 방법 : today.month => 8
```
	
8. **Array**
	- 튜플과는 다르게 같은 데이터들을 담는 타입이다.
```swift
var names : Array<String> = [String]()  // 빈 string array 선언
var data : [Int] = []  // 빈 int array 선언
var family : [String] = ["Father", "Mother", "Me", "Brother"]
var ages : [Int] = Array<int>() // 빈 int array 선언
```

9. **Dictionary**
	- key, value가 쌍으로 이루어진 타입이다.
	- key는 유일하다.
	- var를 사용해야 딕셔너리 수정이 가능하다.
```swift
var mydictionary : [String : Int] = Dictionary<String, Int>() // 빈 딕셔너리 선언 (key : string, value : int)
var mydictionary : [String : Int] = [String : Int]()  // 빈 딕셔너리 선언
var mydictionary : [String : Int] = [:]  // 빈 딕셔너리 선언
mydictionary["my_key"] = 99  // key my_key에 해당하는 value는 99
mydictionary["your_key"] = 100 
print(mydictionary["key", default: 0])  // 0이 반환 됨
```

10. **Set**
	- python의 set처럼 동일한 데이터의 저장은 안된다.
	- 차집합, 교집합, 합집합 같은 set간 연산도 할 수 있다.
```swift
var myset : Set<String> = Set<String>()  // 빈 set 선언
var myset : Set<String> = []  // 빈 set 선언
var myset : Set<String> = ["A", "B", "C", "D", "A"]
print(myset.count)  // 4
```
 
11. **열거형**
- 연관된 항목들을 묶어서 포함하는 형태
- **enum**을 사용해서 데이터를 선언한다.
```swift
enum Month : String{
		case jan = "1월"
		case feb = "2월"
		case mar = "3월"
		case apr = "4월"
		case may = "5월"
		case jun = "6월"
}  // String의 데이터를 가짐
print(Month.feb.rawValue)  // "2월"
enum Married : Int{
		case married  // 0이 자동으로 mapping 됨
		case no_married // 1이 자동으로 mapping 됨
		case not_show = -1
}  // Int의 데이터를 가짐
print(Married(rawValue : 1))  // no_married
```
