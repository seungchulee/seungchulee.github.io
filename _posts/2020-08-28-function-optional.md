---
title: "[Swift] 함수, 옵셔널"
share: false
---

## 함수
함수는 작은 프로그램의 단위이고 함수를 통해서 한번에 여러가지 일을 처리할 수도 있다.  
swift에서도 다른 언어와 마찬가지로 함수를 쓸 수 있다.  
swift에서 조건문이나 반복문에 소괄호는 생략이 가능하지만 함수에서는 이는 불가하다.  
그리고 swift에서는 함수를 override, overload 둘 다 가능하며 함수를 매개변수로도 넘길 수 있다.  

- 함수의 선언
```swift
func 함수 이름 (매개 변수...) -> 반환 타입 {
	함수 내용
	return 반환 값 // 없어도 됨 
}
```
	-swift에서 함수의 기본 형태는 위와 같이 쓸 수 있다.  
	-매개변수는 한 개가 될 수 있고 여러 개가 될 수도 있으며 아예 매개변수가 없는 경우도 있다.  
	-반환되는 값이 없으면 return은 안해줘도 되고 반환 타입에도 `void` 혹은 `()`로 쓸 수 있다. 
```swift
func addition(one : Int, two : Int) -> Int {
	return one + two
}
var data = addition(one : 1, two : 2)
```

- 함수의 호출
	- 함수를 호출 할 때에는 매개변수 이름을 사용해야 한다. 
	- 매개변수와 별개로 전달 인자 레이블도 지정을 해 줄 수 있다.
	- 만약 다른 언어인 C 같이 함수를 호출하고 싶으면 전달 인자 레이블을 `_` 로 지정을 해주면 데이터만 넘기면 된다.
```swift
func addition(num_one one : Int, num_two two : Int) -> Int {
	return one + two
}
var data = addition(num_one : 1, num_two : 2) // 전달 인자 레이블 사용 
```
```swift
func addition(_ one : String, _ two : Int) -> Void {
		print("\(one) is \(two)")
}
addition("Num", 2) // _을 사용하여 전달인자 레이블을 생략
```
	- 같은 함수 이름을 갖고 같은 기능을 하더라도 전달 인자 레이블이 다르면 두 함수는 다른 함수이다.  
	- 매개 변수로 기본 데이터를 갖고 있을 수 있다.
```swift
func addition(_ one : Int, _ two : int = 10) -> Int{
	return one + two
}
var data : Int = addition(1, 2)  // 3
var data : Int = addition(1)  // 11
```
	- 함수 안에서 또 다른 함수를 정의하여 쓸 수도 있다.  
	- `func` 앞에 `@discardableResult` 키워드를 이용해 반환 값이 있는데 이를 무시할 수도 있다. 

- 매개 변수로 쓸 수 있는 함수
	- 함수를 매개변수로도 넘길 수가 있다.
```swift
func average (_ one : Int, _ two : Int) -> Int {
	return (one + two) / 2
}
func what_is_average(_ function : (Int, Int) -> Int, _ one : Int, _ two : Int){
	print("Average is \(function(one, two))")
}
what_is_average(average, 2, 4) // "Average is 3"
```


## 옵셔널
옵셔널은 swift에서 safe하다는 특징이 돋보이는 문법이다.  
옵셔널은 변수나 상수의 값이 있을 수도 있고 없을 수도 있다는 말이라고도 한다.  
`nil`로 표현을 하는데 이는 다른 언어에서의 `NULL`로 알면 된다.  
변수나 상수를 선언하고 바로 `nil`을 할당 할 수는 없다.  
할당을 하고 싶으면 데이터 타입 뒤에 `?`를 붙여주면 된다.
```swift
var opt : Int = 10
opt = 20
opt = nil // 오류 
var opt_2 : Int? = 20  // 옵셔널을 나타내기 위해 ?를 썼다.
opt_2 = 10
opt_2 = nil  // 가능
```
- 옵셔널 추출  
옵셔널의 데이터를 옵셔널이 아닌 값으로 추출해야할 경우도 있다.  
그 때 강제로 추출할 수도 있고 바인딩을 통해서 추출할 수도 있다.  
	- 강제 추출  
	옵셔널을 강제로 추출하는 방법으로 가장 간단한 방법일 수 있지만 프로그램 측면에서는 가장 위험한 방식이므로 되도록이면 안 쓰는 것이 좋다.  
	느낌표를 사용해 추출하는 방식이다.  
```swift
var one : Int? = 10
var two : Int = 20
var data : Int
data = one + two // 오류
data = one! + two // 30 ... !를 사용해 optional을 해제하였다.
```
	- 옵셔널 바인딩  
	옵셔널 바인딩은 옵셔널에 대한 값이 있는지를 일단 확인한다.  
	값이 있으면 값을 추출해서 그 코드 블록 안에서 쓸 수 있는 상수/변수에 할당해 옵셔널이 아닌 형태로 사용할 수 있게 해준다.  
	바인딩 할게 여러개 있으면 하나라도 값이 존재하지 않으면 수행되지 않는다.
```swift
var data : Int? = 10
if let temp = data {  // 임시 상수 temp에 옵셔널의 값을 할당하고 temp는 옵셔널이 아닌 형태로 사용할 수 있다.
// let이 아닌 var도 가능하다.
	print(temp)
}else{
	print("NO")
}
var other : Int? = nil
if var temp = data, var temp2 = other {  // other이 nil이므로 값이 없어서 NO가 출력이 된다.
	print(temp + temp2)
}else {
	print("NO")
}
```
