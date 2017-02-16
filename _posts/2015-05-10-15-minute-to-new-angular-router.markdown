---
layout: post
title:  "15 دقيقه براي آشنايي با روتر جديد انگيولار"
imgUrl: "/images/road1.jpg"
img2: "/images/new-angular-router.png"
img1: "/images/new-angular-router(small).png"
lqip: ""
pic: true
date:   2015-05-10 09:00:00
categories:  start
comments: true
excerpt_separator: <!--more-->
---
اين پست در واقع اولين پست من در وبلاگ تازه تاسيس من هست و گرچه مقداري احساس ميشه كه مطلب براي اولين پست پيچيده و بدون مقدمه است با توجه به داغ بودن موضوع تصميم گرفتم در مورد اين موضوع بنويسم فقط قبل از اينكه اين مطلبو شروع كنم و به اصل ماجرا بپردازم بگم كه اين مطلب براي دوستاني هست كه آشنايي با خود جاوا اسكريپت و افزونه هاي معروف اين زبان اسكريپت نويسي دارند توصيه ميشه و بيشتر بدرد كساني مي خوره كه مي خوان برنامه هاي مقياس وسيع ايجاد كنن و بيشتر به بحث طراحي الگو بر مي گردد
<!--more-->

خوب ديگه به نظرم مقدمات بسه بريم سر اصل مطلب و آشنايي با سيستم جديد روتر اين افزونه قدرتمند توسعه يافته توسط گوگل ،  همه ي داستان بر مي گرده به زماني كه برايان فورد در <bdo dir="ltr">ng-conf</bdo>  سيستم جديد روتر انگيولار كه بزودي در انگيولار نسخه <bdo dir="ltr">1.x</bdo> رونمايي خواهد شد را معرفي كرد و با توجه به كم بودن مستندات و تغييراتي كه اين سيستم به خودش ديده گفتم پست خوبي  بايد باشه براي كابراي وبلاگ و آشنايي مقدماتي با سينتكس تا نسخه اصلي و مستندات كاملش رونمايي بشه ، خوب اگه شما با <bdo dir="ltr">ngRoute </bdo>يا <bdo dir="ltr">ui-router </bdo>  كار كرده باشيد اين سيستم جديد نيازمند تغيير در نگرش و ديد شما داره كه بتونيد به طور كامل دركش كنيد و دچار دام هاي موجود در راه نشيد.

در حالي كه  <bdo dir="ltr">ui-router</bdo> يك روتر مبتني بر موقعيت يا وضعيت است من دوست دارم روتر جديد را يك روتر كامپوننت بنامم كه اين كامپوننت ها اجزاي اصلي وب مدرن را شكل مي دهند اگر اين قضيه براي شما جديد است نگران نباشيد فقط با من همراه بشيد تا در پايان اين مقاله به يك فهم ابتدايي ولي يكپارچه از قوانين و مفاهيم آن دست پيدا كنيد براي شروع بياين با هم يك نگاهي بندازيم به ساده ترين شكل اپ كه از روتر جديد استفاده مي كنه : 

markup:

{% highlight html %}
	<body ng-app="app" ng-controller="AppController">

	  <!-- Define a viewport and give it a name -->
	  <div ng-viewport="main"></div>

	</body>  
{% endhighlight %}

Script:

{% highlight javascript %}
	// Inject router in controller
angular.module('app', ['ngNewRouter'])  
  .controller('AppController', ['$router', AppController]);

// Controller constructor
function AppController ($router) {

  // Configure router, pass array of mappings
  $router.config([
    {
      // Define url for this route
      path: '/',

      // Map components to viewports for this route
      components: {

        // Load home component in main viewport
        'main': 'home'
      }
  ]);
}
{% endhighlight %}

بياين باهم آناليز كنيم :

اول از همه ما مي تونيم ببينيم كه روتر از طريق سرويس <bdo dir="ltr">$router</bdo> قابل تزريق هستش و مي تونه از داخل كنترولر تنظيم بشه كه به اين معني هست كه روتر مي تونه به صورت پويا در زمان اجراي برنامه هم تنظيم بشه .ما ديگه نياز نداريم كه روت ها يا همون مسير ها رو در حالت نهايي و در طول فاز تنظيمات اپليكشن همانطور كه در دو سيستم قبلي  <bdo dir="ltr">ngRoute </bdo> و  <bdo dir="ltr">ui-router</bdo> تعريف مي كرديم تعريف كنيم  
اين يكي از خصوصيتهاي قدرتمند روتر جديده كه به ما اجازه ي <bdo dir="ltr">lazy loading</bdo>رو هم ميده حالا مي خوايم با هم بريم سراغ<bdo dir="ltr">viewport</bdo>  وبا هم اون رو مورد بررسي قرار بديم :

ViewPorts(ويو پورت)

اين قسمت در واقع قسمتي هست كه به شما اجازه مي ده كه به روتر دستور بديد كه كجا مي خواين كامپوننت رو نمايش بديد (در داخل dom)
درست مشابه كاري كه <bdo dir="ltr">ng-view</bdo>در <bdo dir="ltr">ngRoute</bdo>و <bdo dir="ltr">ui-view</bdo> در <bdo dir="ltr">ui-router</bdo> انجام مي دهد .
براي تعريف كردن اين<bdo dir="ltr">viewport </bdo> شما بايد از <bdo dir="ltr">ng-viewport directive</bdo> استفاده كنيد .

{% highlight html %}
<body ng-app="myApp" ng-controller="AppController as app">  
  <div ng-viewport></div>
</body>
{% endhighlight %}

استفاده از چند <bdo dir="ltr">viewport </bdo>به صورت همزمان پشتيباني مي شود اما شما بايد حتما يك نام به آن اختصاص دهيد تا بعدا بتوانيد آنرا شناسايي كنيد :
{% highlight html %}
<body ng-app="myApp" ng-controller="AppController as app">

  <!-- Multiple viewports require a name -->
  <div ng-viewport="nav"></div>
  <div ng-viewport="main"></div>
</body>
{% endhighlight %}
در حقيقت اگر شما به <bdo dir="ltr">viewport</bdo> نام اختصاص ندهيد به آن نام <bdo dir="ltr">default</bdo> اختصاص داده مي شود بنابراين يك ويوپورت بدون نام اساسا مشابه اين است :
{% highlight html %}
<body ng-app="myApp" ng-controller="AppController as app">

  <!-- Same as unnamed viewport -->
  <div ng-viewport="default"></div>
</body> 
{% endhighlight %}
همچنين اگر دو نام يكسان را براي دو <bdo dir="ltr">viewport</bdo> انتخاب كنيد روتر به شما ارور نشان مي دهد :
{% highlight html%}
<body ng-app="myApp" ng-controller="AppController as app">

  <!-- NOT allowed, throws error -->
  <div ng-viewport="main"></div>
  <div ng-viewport="main"></div>
</body>  
{% endhighlight %}


‍Components(كامپوننت)

واژه ي كامپوننت در متن و چهارچوب روتر جديد انگيولار به معني تركيبي از يك تمپليت و يك كنترلر است و هرگز سعي نكنيد 
كامپوننت را در روتر جديدبه عنوان يك روت يا يك وضعيت ( يا هر چيزي كه قبلا با اون آشنايي داشتيد در نظر بگيريد 
state ) بهتر است كه كامپوننت رو به عنوان يك جز اصلي وب يا يك دايركتيو ( با يك كنترلر و يك تمپليت در نظر بگيريم .directive)
هر كامپوننت داراي يك نام مي باشد ووقتي كه نمونه گيري<bdo dir="ltr">(instantiate)</bdo> مي شود 2 تا چيز اتفاق مي افتد :

  1. يك نمونه از كنترولر كامپوننت ايجاد مي گردد .
  2. تمپليت كامپوننت در داخل viewport اختصاص داده شده به نمايش در مياد 

اگه دوباره به تنظيمات روتر نگاه كنيم داريم :

{% highlight javascript %}
// Configure router, pass array of mappings
$router.config([
  {
    // Define url for this route
    path: '/',

    // Map components to viewports for this route
    components: {

      // Load home component in main viewport
      'main': 'home'
    }
]);
{% endhighlight %}

شما متوجه شديد كه اينبار ما فقط نام كامپوننت رو در مپينگ اختصاص داديم .
بنابراين اگه يك كامپوننت از يك كنترولر و يك تمپليت تشكيل شده روترما چجوري مي فهمه كه كدوم كنترولر و تمپليت رو بايد استفاده كنه اگه ما فقط نام كامپوننت را اختصاص داديم ؟

براي راحتي بيشتر روتر جديد انگيولار در داخل خودش يك كامپوننت لودر داره كه از يك قرارداد خيلي ساده پيروي مي كنه :
يك كامپوننت با نام فرضي <bdo dir="ltr">home</bdo> به صورت اتوماتيكي نمونه گيري مي كنه بدين صورت :

  1. يك كنترولر با نام HomeController 
  2. يك تمپليت ذخيره شده به عنوان :
  Components/home/home.html

نكته ي ديگه اي كه وجود داره اينه كه كنترولر كامپوننت در داخل تمپليتي كه براي كامپوننت ايجاد شده قابل ارجاع  مي باشد با استفاده از نام كامپوننت و مي تونيد اون رو مثل سينتكس <bdo dir="ltr">controllerAs</bdo> در پشت صحنه بدونيد .
بنابراين اگه يك كامپوننت با نام <bdo dir="ltr">home</bdo> داريد :

 1.  HomeController به عنوان كنترولر لود مي شود .
 2. components/home/home.html به عنوان تمپليت لود مي شود .
 3. HomeController با استفاده از نام home  داخل تمپليت قابل دسترسي مي باشد .

اين به شما اجازه مي ده كه به خصوصيتهاي و متد هاي كنترولر از داخل تمپليت دسترسي داشته باشيد مثل :

{% highlight html %}
{% raw %}
<h1> Hi {{ home.name }} </h1> 
{% endraw %} 
{% endhighlight %}


هر كامپوننت همچنين يك سري گره ي مخصوص چرخه ي حياتش رو ارائه ميده كه به شما امكان اين رو ميده كه
يك سري عملكرد ها رو به مراحل مسير يابي اپ گره بزنيد واگر يكي از اين عملكرد ها <bdo dir="ltr">false</bdo> برگردونن مسيريابي
كنسل ميشه و ادامه پيدا نمي كند .

گره ها در واقع مكان هاي كاملي هستند براي انجام عمليات غير همگام كه شما مي خواهيد قبل از نمونه گيري كامپوننت 
انجام بدبد مثل لودينگ داده و عمليات احراز هويت ، تاييد دسترسي و ...

در واقع شما مي تونيد گره ها رو به عنوان مكاني در نظر بگيريد كه در آن مي توان منطقي تعريف كرد كه بر اساس آن
تعيين شود كه مي خواهيد مسيريابي كنسل شود يا خير.
خوب تا اينجاي كار شما احتمالا يك آشنايي ابتدايي از اينكه <bdo dir="ltr">viewport</bdo> و <bdo dir="ltr">component</bdo> چي هستند پيدا كرديد بنابراين وقتش رسيده كه ببينيم روتر چجوري واقعا از اونا استفاده مي كنه :

چطور به روتر بگيم چي كار كنه ؟

روتر از طريق وارد كردن يك آرايه از همخوان ها <bdo dir="ltr">(mapping)</bdo> به متد <bdo dir="ltr">Config</bdo> سرويس <bdo dir="ltr">$router</bdo> به طوري كه هر
همخواني تشكيل شده از يك مسير<bdo dir="ltr">(path)</bdo> و يك هم خواني <bdo dir="ltr">viewports</bdo> و <bdo dir="ltr">components</bdo> 
بنابراين اگر ما در ماركاپ داشته باشيم :
{% highlight html %}
<body ng-app="app" ng-controller="AppController">

  <!-- Define a viewport and don't give a name -->
  <div ng-viewport="main"></div>

</body>  
{% endhighlight %}
ما مي تونيم از كد زير در <bdo dir="ltr">AppController</bdo> استفاده كنيم :

{% highlight javascript %}
// Configure router, pass array of mappings
$router.config([
  {
    // Define url for this route
    path: '/',

    // Map components to viewports for this route
    components: {

      // Load home component in main viewport
      'main': 'home'
    }
  }
]);
{% endhighlight %}

كه به روتر بگيم كه هر وقت كه <bdo dir="ltr">url</bdo> برابر با مثلا "/" بود ، ما مي خواهيم كه روتر كامپوننت <bdo dir="ltr">home</bdo> را در داخل <bdo dir="ltr">viewport main</bdo> 
لود كند .

متد  <bdo dir="ltr">$router.config</bdo> يك آرايه بع عنوان آرگيومنت قبول ميكنه يا همون ورودي كه به شما اين اجازه رو ميده كه چند تا مسير رو همزمان تنظيم كنيد :

{% highlight javascript %}
$router.config([
  {
    path: '/',
    components: {
      'main': 'home'
    }
  },
  {
    path: '/admin',
    components: {
      'main': 'admin'
    }
  }
]);
{% endhighlight %}


همچنين يك نكته ي كوچك ديگه در مورد استفاده از ويوپورت هاي بدون نام وجود داره :

كه اون اينه كه شما مي تونيد به جاي وارد كردن <bdo dir="ltr">object</bdo> يك <bdo dir="ltr">string</bdo> را به عنوان <bdo dir="ltr">component</bdo> وارد آرايه ي <bdo dir="ltr">config</bdo> كنيد :

ما همچنين قبلا ياد گرفتيم كه در پشت صحنه يك ويو پورت بدون نام برابر با يك ويو پورت با نام  <bdo dir="ltr">"default"</bdo> هست بنابراين استفاده از يك ويوپورت بدون نام اساسا مشابه چيزي است كه در پايين مي بينيم :

علاوه بر اون ما همچنين ياد گرفتيم كه روتر جديد به شما اجازه مي ده كه چند تا ويوپورت متفاوت نام گزاري شده تعريف كنيد :
كه مي تونن به صورت انفرادي تنظيم بشن از طريق نام ويوپورت به عنوان <bdo dir="ltr">key</bdo> در داخل <bdo dir="ltr">mapping object</bdo> :
به روتر مي گه كه به اين صورت نمونه گيري كنه :

1. nav component در داخل nav viewport بايد لود بشه .
2. home component در داخل main viewport بايد لود بشه .
وقتي كه url معادل با "/" .

تا اينجاي كار شايد شما فكر كنيد كه روتر جديد چقدر شبيه به <bdo dir="ltr">ngRoute</bdo> و <bdo dir="ltr">ui-router</bdo> عمل مي كنه ولي اشتباه نكنيد 
هنوز چند تا نكته ي نگفته باقي مونده .

Child routers (مسير فرزند)

هر وقت كه شما يك ويوپورت تعريف مي كنيد ، يك روت يا مسير فرزند جديد هم ايجاد مي شود .
اين روت(مسير) فرزند جديد مي تونه بعدا به كنترولر كه موجود در كامپوننت هست  كه از طريق <bdo dir="ltr">mapping</bdo> ويوپورت ايجاد شده
تزريق بشه.

بياين با هم ماركاپي كه در پايين اومده رو در نظر بگيريم :

{% highlight html %}
<body ng-app="app" ng-controller="AppController">  
  <div ng-viewport="main"></div>
</body> 
{% endhighlight %} 

واسكريپتي كه اينجا اومده هم در نظر بگيريم :

{% highlight javascript %}
function AppController ($router) {

  // Here $router is the root router
  $router.config([
    {
      path: '/',
      components: {
        'main': 'home'
      }
    }
  ]);
}

function HomeController ($router) {

  // Here $router is a child router
  // of the root router and the controller
  // can define routes embedded within the
  // home component
  $router.config([
      // ...  
  ]);
}
{% endhighlight %}
همانطور كه مي تونيم تو كامنت ها ببينيم <bdo dir="ltr">$router</bdo> تزريق شده در <bdo dir="ltr">HomeController</bdo> مشابه نمونه <bdo dir="ltr">$router</bdo> كه در <bdo dir="ltr">AppController</bdo> تزريق شده نيست !

بله سرويس <bdo dir="ltr">$router</bdo> كه در <bdo dir="ltr">HomeController</bdo> هست در واقع مسير ياب فرزند از سرويس <bdo dir="ltr">$router</bdo> در <bdo dir="ltr">AppController</bdo> است.
اين يك مفهوم خيلي قدرتمند است و به ما اجازه مي ده كه كامپوننت هايي بسازيم كه تنظيمات روت <bdo dir="ltr">embedded</bdo> شده ي خودشون رو داشته باشند.
من تلاش كردم تصويري كه اين قضيه رو راحت تر توضيح بده پيدا كنم براي فهم بهتر و به اين شكل رسيدم :

<!-- src="{{ site.url }}{{ page.img1 }}" -->
{% if page.pic %}
<img class="angularPic lazyload"  data-src="{{ site.url }}{{ page.img2 }}" alt="" />
{% endif %}

خوب اميد وارم كه از مطلب امروز استفاده ي كافي رو برده باشيد در ضمن اگر در متن بنده اشكالاتي ديد يا حق مطلب به صورت واضح ادا نشده بود بگزاريد به پاي تازه تاسيس بودن بلاگ مطمئن باشيد كه در آينده پست هاي بهتر و با كيفيت تري رو با ياري 
شما عزيزان ارائه مي كنم .

<!-- 
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('ooArashoo')
#=> prints 'Hi, ooArashoo' to STDOUT.
{% endhighlight %}
 -->

