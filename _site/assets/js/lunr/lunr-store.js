var store = [{
        "title": "첫 게시글",
        "excerpt":"시작하게 된 이유 코로나로 인해 재택을 하면서 상대적으로 통근하는 2시간-3시간이 줄어들었음 이 시간을 좀 더 효율적으로 사용하고 싶어서 고민함 (다시 통근하면 어떠할지 고민해야할듯) 어디서 TIL을 주워들어서 이를 해보기로 함 주로 TIL, 공부한 개념, 지식 같은 것들을 기록할듯 어떤 것을 채워나갈지 평소에 Swift 해보고 싶어서 아마 swift를 공부할듯 회사에서 Javascript도 접한...","categories": ["daily"],
        "tags": [],
        "url": "http://localhost:4000/daily/first-article/",
        "teaser": null
      },{
        "title": "[Swift] 시작, Data Type",
        "excerpt":"swift란? swift는 처음에 safe, modern, powerful을 모토로 가져왔다. 지금은 safe, fast, expressive를 방향성으로 잡고 가는 중이다. safe : 문법을 엄격하게 적용하여 개발자의 실수를 방지, 타입추론은 지원하긴 함. fast : 예전 애플 관련 프로그래밍을 하려고 하면 Objective-C를 배워야 했다. 지금은 Swift를 만들면서 Objective-C에 버금가는 성능을 내려고 하는 중이다. expressive : 그나마...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/swift-data-type/",
        "teaser": null
      },{
        "title": "[Swift] 연산자, 조건문, 반복문",
        "excerpt":"연산자 swift에도 다양한 연산자가 존재한다. 많은 언어에서 사용하는 사칙연산을 하는 연산자와 비교하는 연산자 그리고 범위 연산자 등 다양한 연산자를 지원한다. 할당 연산자 단순히 말해서 값을 할당할 때 사용하는 연산자이다. =을 사용해서 값을 할당한다. swift는 safe한 언어로 데이터 타입이 다르면 오류가 발생한다. var a : Int = 10 // 여기서 =...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/swift-control-flow/",
        "teaser": null
      },{
        "title": "[Swift] 함수, 옵셔널",
        "excerpt":"함수 함수는 작은 프로그램의 단위이고 함수를 통해서 한번에 여러가지 일을 처리할 수도 있다. swift에서도 다른 언어와 마찬가지로 함수를 쓸 수 있다. swift에서 조건문이나 반복문에 소괄호는 생략이 가능하지만 함수에서는 이는 불가하다. 그리고 swift에서는 함수를 override, overload 둘 다 가능하며 함수를 매개변수로도 넘길 수 있다. 함수의 선언 func 함수 이름 (매개 변수...)...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/function-optional/",
        "teaser": null
      },{
        "title": "[Swift] 구조체, 클래스, 프로퍼티, 메서드",
        "excerpt":"구조체 / 클래스 구조체 구조체 선언 struct 키워드 사용 struct 구조체 이름 { 프로퍼티와 메서드들 } struct customer { var name : String var weight : Double } // 예시 구조체 생성 및 초기화 // 구조체 생성 var customer_one : customer = customer(name : \"Stephen\", weight : 70.0) // 상수로도...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/struct-class-property-method/",
        "teaser": null
      },{
        "title": "[Swift] 인스턴스 생성/소멸, 접근 제어",
        "excerpt":"인스턴스 생성 / 소멸 인스턴스 생성 클래스, 구조체, 열거형 등에서 ìnit() 키워드를 이용해 initialize 할 수 있다. 따로 반환값은 없다 (단순히 초기화를 위함) class A { /* some code */ init(){ // initialize } } struct B { /* some code */ init() { // initialize } } enum C{...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/init-deinit-public-private/",
        "teaser": null
      },{
        "title": "[Swift] 클로저",
        "excerpt":"클로저 함수 또한 클로저의 한 형태로 클로저는 일정 기능을 하는 코드를 하나의 블록으로 모아놓은 것이다. 이름은 존재하지 않을 수 있지만 파라미터를 받을 수 있고 반환값도 존재할 수 있다. 이러한 swift는 다양한 형태로도 쓸 수 있고 https://fuckingclosuresyntax.com/ 에 다양한 방식의 closure가 존재한다. 클로저 특징 매개변수와 반환 값의 타입을 문맥을 통해 유추할...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/closure/",
        "teaser": null
      },{
        "title": "[Swift] 옵셔널 체이닝, 빠른 종료",
        "excerpt":"옵셔널 체이닝 옵셔널을 반복 사용해서 서로 얽혀있는 옵셔널 중 하나라도 값이 존재하지 않으면 nil을 반환하게 하는 방식이다. let p_one : Person = Person(name:\"Stephen\") if let roomNumber: Int = p_one.address?.building?.room?.number{ // optional chaining 방식 print(roomNumber) } else{ print(\"No Room\") } 위의 코드에서 if 안에 구문을 보면 옵셔널 바인딩을 이용해서 접근을 하고...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/optional-chaining-early-exit/",
        "teaser": null
      },{
        "title": "[Swift] Map, Filter, Reduce",
        "excerpt":"스위프트에서는 함수를 일급 객체로 취급을 하기 때문에 함수를 다른 함수의 인자로 전달할 수 있다. 매개변수로 함수가 전달이 되는 것을 고차함수라고 하는데 대표적으로 맵, 필터, 리듀스가 있다. 맵 (Map) 맵은 자신을 호출할 때 매개변수로 전달된 함수를 실행하여 그 결과를 다시 반환해주는 함수이다. 배열, 딕셔너리, 세트, 옵셔널 등에서 사용이 가능하다. 기존 데이터는...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/map-filter-reduce/",
        "teaser": null
      },{
        "title": "[Swift] Monad",
        "excerpt":"모나드 프로그래밍 관점에서 모나드가 갖춰야하는 조건에는 다음과 같다. 타입을 인자로 받는 타입(특정 타입의 값을 포장) 특정 타입의 값을 포장한 것을 반환하는 함수(메서드)가 존재 포장된 값을 반환하여 같은 형태로 포장하는 함수(메서드)가 존재 이 조건을 처음에 봤을 때 아직은 무슨 말인지 정확히 이해가 가지는 않았다. 그래서 모나드에 접근하기 위해서 필요한 여러 개념을...","categories": ["swift"],
        "tags": [],
        "url": "http://localhost:4000/swift/monad/",
        "teaser": null
      }]
