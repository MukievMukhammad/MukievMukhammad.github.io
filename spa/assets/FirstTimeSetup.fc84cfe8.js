import{k as B,h as g,q as O,o as pe,T as me,r as oe,c as w,Q as E,w as Y,R as G,g as J,i as ge,e as K,be as se,aD as he,p as ve,f as fe,u as ye,_ as be,z as ce,ar as X,A as v,a3 as P,am as we,aj as ke,B as h,K as _,F as m,E as $,a6 as I,I as A,aF as y,G as r,D as o,J as C,H as qe,X as Q,W as V,L as Z,C as L,M as ee,P as Se,S as _e}from"./index.679519cb.js";import{c as Ce,d as xe,A as T,g as Ie,p as ze,i as W,h as H,q as te,r as F,t as $e,j as ae,s as ie}from"./audioIO.4a605c7c.js";import{u as Ae,f as Te,a as Pe,b as Le,c as je,e as Ne,Q as D,o as R,g as Qe}from"./QBadge.ff5771de.js";var U=B({name:"QStepperNavigation",setup(e,{slots:t}){return()=>g("div",{class:"q-stepper__nav"},O(t.default))}}),Ee=B({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:i}){let a=!1,n,c,d=null,p=null,f,b;function k(){n&&n(),n=null,a=!1,d!==null&&(clearTimeout(d),d=null),p!==null&&(clearTimeout(p),p=null),c!==void 0&&c.removeEventListener("transitionend",f),f=null}function q(s,l,u){l!==void 0&&(s.style.height=`${l}px`),s.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,a=!0,n=u}function z(s,l){s.style.overflowY=null,s.style.height=null,s.style.transition=null,k(),l!==b&&i(l)}function j(s,l){let u=0;c=s,a===!0?(k(),u=s.offsetHeight===s.scrollHeight?0:void 0):(b="hide",s.style.overflowY="hidden"),q(s,u,l),d=setTimeout(()=>{d=null,s.style.height=`${s.scrollHeight}px`,f=S=>{p=null,(Object(S)!==S||S.target===s)&&z(s,"show")},s.addEventListener("transitionend",f),p=setTimeout(f,e.duration*1.1)},100)}function N(s,l){let u;c=s,a===!0?k():(b="show",s.style.overflowY="hidden",u=s.scrollHeight),q(s,u,l),d=setTimeout(()=>{d=null,s.style.height=0,f=S=>{p=null,(Object(S)!==S||S.target===s)&&z(s,"hide")},s.addEventListener("transitionend",f),p=setTimeout(f,e.duration*1.1)},100)}return pe(()=>{a===!0&&k()}),()=>g(me,{css:!1,appear:e.appear,onEnter:j,onLeave:N},t.default)}}),ue=B({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:t}){const{proxy:{$q:i}}=J(),a=oe(null),n=w(()=>e.stepper.modelValue===e.step.name),c=w(()=>{const l=e.step.disable;return l===!0||l===""}),d=w(()=>{const l=e.step.error;return l===!0||l===""}),p=w(()=>{const l=e.step.done;return c.value===!1&&(l===!0||l==="")}),f=w(()=>{const l=e.step.headerNav,u=l===!0||l===""||l===void 0;return c.value===!1&&e.stepper.headerNav&&u}),b=w(()=>e.step.prefix&&(n.value===!1||e.stepper.activeIcon==="none")&&(d.value===!1||e.stepper.errorIcon==="none")&&(p.value===!1||e.stepper.doneIcon==="none")),k=w(()=>{const l=e.step.icon||e.stepper.inactiveIcon;if(n.value===!0){const u=e.step.activeIcon||e.stepper.activeIcon;return u==="none"?l:u||i.iconSet.stepper.active}if(d.value===!0){const u=e.step.errorIcon||e.stepper.errorIcon;return u==="none"?l:u||i.iconSet.stepper.error}if(c.value===!1&&p.value===!0){const u=e.step.doneIcon||e.stepper.doneIcon;return u==="none"?l:u||i.iconSet.stepper.done}return l}),q=w(()=>{const l=d.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(n.value===!0){const u=e.step.activeColor||e.stepper.activeColor||e.step.color;return u!==void 0?u:l}return l!==void 0?l:c.value===!1&&p.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),z=w(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(q.value!==void 0?` text-${q.value}`:"")+(d.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(b.value===!0?"prefix":"icon"):"")+(n.value===!0?" q-stepper__tab--active":"")+(p.value===!0?" q-stepper__tab--done":"")+(f.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(c.value===!0?" q-stepper__tab--disabled":"")),j=w(()=>e.stepper.headerNav!==!0?!1:f.value);function N(){a.value!==null&&a.value.focus(),n.value===!1&&e.goToPanel(e.step.name)}function s(l){l.keyCode===13&&n.value===!1&&e.goToPanel(e.step.name)}return()=>{const l={class:z.value};f.value===!0&&(l.onClick=N,l.onKeyup=s,Object.assign(l,c.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:t.tabindex||0}));const u=[g("div",{class:"q-focus-helper",tabindex:-1,ref:a}),g("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[g("span",{class:"row flex-center"},[b.value===!0?e.step.prefix:g(E,{name:k.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const S=[g("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&S.push(g("div",{class:"q-stepper__caption"},e.step.caption)),u.push(g("div",{class:"q-stepper__label q-stepper__line relative-position"},S))}return Y(g("div",l,u),[[G,j.value]])}}});function de(e){return g("div",{class:"q-stepper__step-content"},[g("div",{class:"q-stepper__step-inner"},O(e.default))])}const re={setup(e,{slots:t}){return()=>de(t)}};var M=B({name:"QStep",props:{...Ae,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:t,emit:i}){const{proxy:{$q:a}}=J(),n=ge(se,K);if(n===K)return console.error("QStep needs to be a child of QStepper"),K;const{getCacheWithFn:c}=Te(),d=oe(null),p=w(()=>n.value.modelValue===e.name),f=w(()=>a.platform.is.ios!==!0&&a.platform.is.chrome===!0||p.value!==!0||n.value.vertical!==!0?{}:{onScroll(q){const{target:z}=q;z.scrollTop>0&&(z.scrollTop=0),e.onScroll!==void 0&&i("scroll",q)}}),b=w(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function k(){const q=n.value.vertical;return q===!0&&n.value.keepAlive===!0?g(he,n.value.keepAliveProps.value,p.value===!0?[g(n.value.needsUniqueKeepAliveWrapper.value===!0?c(b.value,()=>({...re,name:b.value})):re,{key:b.value},t.default)]:void 0):q!==!0||p.value===!0?de(t):void 0}return()=>g("div",{ref:d,class:"q-stepper__step",role:"tabpanel",...f.value},n.value.vertical===!0?[g(ue,{stepper:n.value,step:e,goToPanel:n.value.goToPanel}),n.value.animated===!0?g(Ee,k):k()]:[k()])}});const Be=/(-\w)/g;function Ve(e){const t={};for(const i in e){const a=i.replace(Be,n=>n[1].toUpperCase());t[a]=e[i]}return t}var We=B({name:"QStepper",props:{...Ce,...Pe,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:Le,setup(e,{slots:t}){const i=J(),a=xe(e,i.proxy.$q),{updatePanelsList:n,isValidPanelName:c,updatePanelIndex:d,getPanelContent:p,getPanels:f,panelDirectives:b,goToPanel:k,keepAliveProps:q,needsUniqueKeepAliveWrapper:z}=je();ve(se,w(()=>({goToPanel:k,keepAliveProps:q,needsUniqueKeepAliveWrapper:z,...e})));const j=w(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(a.value===!0?" q-stepper--dark q-dark":"")),N=w(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function s(){const l=O(t.message,[]);if(e.vertical===!0){c(e.modelValue)&&d();const u=g("div",{class:"q-stepper__content"},O(t.default));return l===void 0?[u]:l.concat(u)}return[g("div",{class:N.value},f().map(u=>{const S=Ve(u.props);return g(ue,{key:S.name,stepper:e,step:S,goToPanel:k})})),l,ye("div",{class:"q-stepper__content q-panel-parent"},p(),"cont",e.swipeable,()=>b.value)]}return()=>(n(t),g("div",{class:j.value},fe(t.navigation,s())))}});const ne=e=>{e=1831565813+(e|=0)|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};class Fe{constructor(t){this.dictionaries=void 0,this.length=void 0,this.separator=void 0,this.style=void 0,this.seed=void 0;const{length:i,separator:a,dictionaries:n,style:c,seed:d}=t;this.dictionaries=n,this.separator=a,this.length=i,this.style=c,this.seed=d}generate(){if(!this.dictionaries)throw new Error('Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object');if(this.length<=0)throw new Error("Invalid length provided");if(this.length>this.dictionaries.length)throw new Error(`The length cannot be bigger than the number of dictionaries.
Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);let t=this.seed;return this.dictionaries.slice(0,this.length).reduce((i,a)=>{let n;t?(n=(d=>{if(typeof d=="string"){const p=d.split("").map(b=>b.charCodeAt(0)).reduce((b,k)=>b+k,1),f=Math.floor(Number(p));return ne(f)}return ne(d)})(t),t=4294967296*n):n=Math.random();let c=a[Math.floor(n*a.length)]||"";if(this.style==="lowerCase")c=c.toLowerCase();else if(this.style==="capital"){const[d,...p]=c.split("");c=d.toUpperCase()+p.join("")}else this.style==="upperCase"&&(c=c.toUpperCase());return i?`${i}${this.separator}${c}`:`${c}`},"")}}const le={separator:"_",dictionaries:[]},De=e=>{const t=[...e&&e.dictionaries||le.dictionaries],i={...le,...e,length:e&&e.length||t.length,dictionaries:t};if(!e||!e.dictionaries||!e.dictionaries.length)throw new Error('A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide');return new Fe(i).generate()};var Re=["able","above","absent","absolute","abstract","abundant","academic","acceptable","accepted","accessible","accurate","accused","active","actual","acute","added","additional","adequate","adjacent","administrative","adorable","advanced","adverse","advisory","aesthetic","afraid","aggregate","aggressive","agreeable","agreed","agricultural","alert","alive","alleged","allied","alone","alright","alternative","amateur","amazing","ambitious","amused","ancient","angry","annoyed","annual","anonymous","anxious","appalling","apparent","applicable","appropriate","arbitrary","architectural","armed","arrogant","artificial","artistic","ashamed","asleep","assistant","associated","atomic","attractive","automatic","autonomous","available","average","awake","aware","awful","awkward","back","bad","balanced","bare","basic","beautiful","beneficial","better","bewildered","big","binding","biological","bitter","bizarre","blank","blind","blonde","bloody","blushing","boiling","bold","bored","boring","bottom","brainy","brave","breakable","breezy","brief","bright","brilliant","broad","broken","bumpy","burning","busy","calm","capable","capitalist","careful","casual","causal","cautious","central","certain","changing","characteristic","charming","cheap","cheerful","chemical","chief","chilly","chosen","christian","chronic","chubby","circular","civic","civil","civilian","classic","classical","clean","clear","clever","clinical","close","closed","cloudy","clumsy","coastal","cognitive","coherent","cold","collective","colonial","colorful","colossal","coloured","colourful","combative","combined","comfortable","coming","commercial","common","communist","compact","comparable","comparative","compatible","competent","competitive","complete","complex","complicated","comprehensive","compulsory","conceptual","concerned","concrete","condemned","confident","confidential","confused","conscious","conservation","conservative","considerable","consistent","constant","constitutional","contemporary","content","continental","continued","continuing","continuous","controlled","controversial","convenient","conventional","convinced","convincing","cooing","cool","cooperative","corporate","correct","corresponding","costly","courageous","crazy","creative","creepy","criminal","critical","crooked","crowded","crucial","crude","cruel","cuddly","cultural","curious","curly","current","curved","cute","daily","damaged","damp","dangerous","dark","dead","deaf","deafening","dear","decent","decisive","deep","defeated","defensive","defiant","definite","deliberate","delicate","delicious","delighted","delightful","democratic","dependent","depressed","desirable","desperate","detailed","determined","developed","developing","devoted","different","difficult","digital","diplomatic","direct","dirty","disabled","disappointed","disastrous","disciplinary","disgusted","distant","distinct","distinctive","distinguished","disturbed","disturbing","diverse","divine","dizzy","domestic","dominant","double","doubtful","drab","dramatic","dreadful","driving","drunk","dry","dual","due","dull","dusty","dutch","dying","dynamic","eager","early","eastern","easy","economic","educational","eerie","effective","efficient","elaborate","elated","elderly","eldest","electoral","electric","electrical","electronic","elegant","eligible","embarrassed","embarrassing","emotional","empirical","empty","enchanting","encouraging","endless","energetic","enormous","enthusiastic","entire","entitled","envious","environmental","equal","equivalent","essential","established","estimated","ethical","ethnic","eventual","everyday","evident","evil","evolutionary","exact","excellent","exceptional","excess","excessive","excited","exciting","exclusive","existing","exotic","expected","expensive","experienced","experimental","explicit","extended","extensive","external","extra","extraordinary","extreme","exuberant","faint","fair","faithful","familiar","famous","fancy","fantastic","far","fascinating","fashionable","fast","fat","fatal","favourable","favourite","federal","fellow","female","feminist","few","fierce","filthy","final","financial","fine","firm","fiscal","fit","fixed","flaky","flat","flexible","fluffy","fluttering","flying","following","fond","foolish","foreign","formal","formidable","forthcoming","fortunate","forward","fragile","frail","frantic","free","frequent","fresh","friendly","frightened","front","frozen","full","fun","functional","fundamental","funny","furious","future","fuzzy","gastric","gay","general","generous","genetic","gentle","genuine","geographical","giant","gigantic","given","glad","glamorous","gleaming","global","glorious","golden","good","gorgeous","gothic","governing","graceful","gradual","grand","grateful","greasy","great","grieving","grim","gross","grotesque","growing","grubby","grumpy","guilty","handicapped","handsome","happy","hard","harsh","head","healthy","heavy","helpful","helpless","hidden","high","hilarious","hissing","historic","historical","hollow","holy","homeless","homely","hon","honest","horizontal","horrible","hostile","hot","huge","human","hungry","hurt","hushed","husky","icy","ideal","identical","ideological","ill","illegal","imaginative","immediate","immense","imperial","implicit","important","impossible","impressed","impressive","improved","inadequate","inappropriate","inc","inclined","increased","increasing","incredible","independent","indirect","individual","industrial","inevitable","influential","informal","inherent","initial","injured","inland","inner","innocent","innovative","inquisitive","instant","institutional","insufficient","intact","integral","integrated","intellectual","intelligent","intense","intensive","interested","interesting","interim","interior","intermediate","internal","international","intimate","invisible","involved","irrelevant","isolated","itchy","jealous","jittery","joint","jolly","joyous","judicial","juicy","junior","just","keen","key","kind","known","labour","large","late","latin","lazy","leading","left","legal","legislative","legitimate","lengthy","lesser","level","lexical","liable","liberal","light","like","likely","limited","linear","linguistic","liquid","literary","little","live","lively","living","local","logical","lonely","long","loose","lost","loud","lovely","low","loyal","ltd","lucky","mad","magic","magnetic","magnificent","main","major","male","mammoth","managerial","managing","manual","many","marginal","marine","marked","married","marvellous","marxist","mass","massive","mathematical","mature","maximum","mean","meaningful","mechanical","medical","medieval","melodic","melted","mental","mere","metropolitan","mid","middle","mighty","mild","military","miniature","minimal","minimum","ministerial","minor","miserable","misleading","missing","misty","mixed","moaning","mobile","moderate","modern","modest","molecular","monetary","monthly","moral","motionless","muddy","multiple","mushy","musical","mute","mutual","mysterious","naked","narrow","nasty","national","native","natural","naughty","naval","near","nearby","neat","necessary","negative","neighbouring","nervous","net","neutral","new","nice","noble","noisy","normal","northern","nosy","notable","novel","nuclear","numerous","nursing","nutritious","nutty","obedient","objective","obliged","obnoxious","obvious","occasional","occupational","odd","official","ok","okay","old","olympic","only","open","operational","opposite","optimistic","oral","ordinary","organic","organisational","original","orthodox","other","outdoor","outer","outrageous","outside","outstanding","overall","overseas","overwhelming","painful","pale","panicky","parallel","parental","parliamentary","partial","particular","passing","passive","past","patient","payable","peaceful","peculiar","perfect","permanent","persistent","personal","petite","philosophical","physical","plain","planned","plastic","pleasant","pleased","poised","polite","political","poor","popular","positive","possible","potential","powerful","practical","precious","precise","preferred","pregnant","preliminary","premier","prepared","present","presidential","pretty","previous","prickly","primary","prime","primitive","principal","printed","prior","private","probable","productive","professional","profitable","profound","progressive","prominent","promising","proper","proposed","prospective","protective","protestant","proud","provincial","psychiatric","psychological","public","puny","pure","purring","puzzled","quaint","qualified","quarrelsome","querulous","quick","quickest","quiet","quintessential","quixotic","racial","radical","rainy","random","rapid","rare","raspy","rational","ratty","raw","ready","real","realistic","rear","reasonable","recent","reduced","redundant","regional","registered","regular","regulatory","related","relative","relaxed","relevant","reliable","relieved","religious","reluctant","remaining","remarkable","remote","renewed","representative","repulsive","required","resident","residential","resonant","respectable","respective","responsible","resulting","retail","retired","revolutionary","rich","ridiculous","right","rigid","ripe","rising","rival","roasted","robust","rolling","romantic","rotten","rough","round","royal","rubber","rude","ruling","running","rural","sacred","sad","safe","salty","satisfactory","satisfied","scared","scary","scattered","scientific","scornful","scrawny","screeching","secondary","secret","secure","select","selected","selective","selfish","semantic","senior","sensible","sensitive","separate","serious","severe","sexual","shaggy","shaky","shallow","shared","sharp","sheer","shiny","shivering","shocked","short","shrill","shy","sick","significant","silent","silky","silly","similar","simple","single","skilled","skinny","sleepy","slight","slim","slimy","slippery","slow","small","smart","smiling","smoggy","smooth","social","socialist","soft","solar","sole","solid","sophisticated","sore","sorry","sound","sour","southern","soviet","spare","sparkling","spatial","special","specific","specified","spectacular","spicy","spiritual","splendid","spontaneous","sporting","spotless","spotty","square","squealing","stable","stale","standard","static","statistical","statutory","steady","steep","sticky","stiff","still","stingy","stormy","straight","straightforward","strange","strategic","strict","striking","striped","strong","structural","stuck","stupid","subjective","subsequent","substantial","subtle","successful","successive","sudden","sufficient","suitable","sunny","super","superb","superior","supporting","supposed","supreme","sure","surprised","surprising","surrounding","surviving","suspicious","sweet","swift","symbolic","sympathetic","systematic","tall","tame","tart","tasteless","tasty","technical","technological","teenage","temporary","tender","tense","terrible","territorial","testy","then","theoretical","thick","thin","thirsty","thorough","thoughtful","thoughtless","thundering","tight","tiny","tired","top","tory","total","tough","toxic","traditional","tragic","tremendous","tricky","tropical","troubled","typical","ugliest","ugly","ultimate","unable","unacceptable","unaware","uncertain","unchanged","uncomfortable","unconscious","underground","underlying","unemployed","uneven","unexpected","unfair","unfortunate","unhappy","uniform","uninterested","unique","united","universal","unknown","unlikely","unnecessary","unpleasant","unsightly","unusual","unwilling","upper","upset","uptight","urban","urgent","used","useful","useless","usual","vague","valid","valuable","variable","varied","various","varying","vast","verbal","vertical","very","vicarious","vicious","victorious","violent","visible","visiting","visual","vital","vitreous","vivacious","vivid","vocal","vocational","voiceless","voluminous","voluntary","vulnerable","wandering","warm","wasteful","watery","weak","wealthy","weary","wee","weekly","weird","welcome","well","western","wet","whispering","whole","wicked","wide","widespread","wild","wilful","willing","willowy","wily","wise","wispy","wittering","witty","wonderful","wooden","working","worldwide","worried","worrying","worthwhile","worthy","written","wrong","xenacious","xenial","xenogeneic","xenophobic","xeric","xerothermic","yabbering","yammering","yappiest","yappy","yawning","yearling","yearning","yeasty","yelling","yelping","yielding","yodelling","young","youngest","youthful","ytterbic","yucky","yummy","zany","zealous","zeroth","zestful","zesty","zippy","zonal","zoophagous","zygomorphic","zygotic"],Ue=["aardvark","aardwolf","albatross","alligator","alpaca","amphibian","anaconda","angelfish","anglerfish","ant","anteater","antelope","antlion","ape","aphid","armadillo","asp","baboon","badger","bandicoot","barnacle","barracuda","basilisk","bass","bat","bear","beaver","bedbug","bee","beetle","bird","bison","blackbird","boa","boar","bobcat","bobolink","bonobo","booby","bovid","bug","butterfly","buzzard","camel","canid","canidae","capybara","cardinal","caribou","carp","cat","caterpillar","catfish","catshark","cattle","centipede","cephalopod","chameleon","cheetah","chickadee","chicken","chimpanzee","chinchilla","chipmunk","cicada","clam","clownfish","cobra","cockroach","cod","condor","constrictor","coral","cougar","cow","coyote","crab","crane","crawdad","crayfish","cricket","crocodile","crow","cuckoo","damselfly","deer","dingo","dinosaur","dog","dolphin","donkey","dormouse","dove","dragon","dragonfly","duck","eagle","earthworm","earwig","echidna","eel","egret","elephant","elk","emu","ermine","falcon","felidae","ferret","finch","firefly","fish","flamingo","flea","fly","flyingfish","fowl","fox","frog","galliform","gamefowl","gayal","gazelle","gecko","gerbil","gibbon","giraffe","goat","goldfish","goose","gopher","gorilla","grasshopper","grouse","guan","guanaco","guineafowl","gull","guppy","haddock","halibut","hamster","hare","harrier","hawk","hedgehog","heron","herring","hippopotamus","hookworm","hornet","horse","hoverfly","hummingbird","hyena","iguana","impala","jackal","jaguar","jay","jellyfish","junglefowl","kangaroo","kingfisher","kite","kiwi","koala","koi","krill","ladybug","lamprey","landfowl","lark","leech","lemming","lemur","leopard","leopon","limpet","lion","lizard","llama","lobster","locust","loon","louse","lungfish","lynx","macaw","mackerel","magpie","mammal","manatee","mandrill","marlin","marmoset","marmot","marsupial","marten","mastodon","meadowlark","meerkat","mink","minnow","mite","mockingbird","mole","mollusk","mongoose","monkey","moose","mosquito","moth","mouse","mule","muskox","narwhal","newt","nightingale","ocelot","octopus","opossum","orangutan","orca","ostrich","otter","owl","ox","panda","panther","parakeet","parrot","parrotfish","partridge","peacock","peafowl","pelican","penguin","perch","pheasant","pig","pigeon","pike","pinniped","piranha","planarian","platypus","pony","porcupine","porpoise","possum","prawn","primate","ptarmigan","puffin","puma","python","quail","quelea","quokka","rabbit","raccoon","rat","rattlesnake","raven","reindeer","reptile","rhinoceros","roadrunner","rodent","rook","rooster","roundworm","sailfish","salamander","salmon","sawfish","scallop","scorpion","seahorse","shark","sheep","shrew","shrimp","silkworm","silverfish","skink","skunk","sloth","slug","smelt","snail","snake","snipe","sole","sparrow","spider","spoonbill","squid","squirrel","starfish","stingray","stoat","stork","sturgeon","swallow","swan","swift","swordfish","swordtail","tahr","takin","tapir","tarantula","tarsier","termite","tern","thrush","tick","tiger","tiglon","toad","tortoise","toucan","trout","tuna","turkey","turtle","tyrannosaurus","unicorn","urial","vicuna","viper","vole","vulture","wallaby","walrus","warbler","wasp","weasel","whale","whippet","whitefish","wildcat","wildebeest","wildfowl","wolf","wolverine","wombat","woodpecker","worm","wren","xerinae","yak","zebra"],Me=["amaranth","amber","amethyst","apricot","aqua","aquamarine","azure","beige","black","blue","blush","bronze","brown","chocolate","coffee","copper","coral","crimson","cyan","emerald","fuchsia","gold","gray","green","harlequin","indigo","ivory","jade","lavender","lime","magenta","maroon","moccasin","olive","orange","peach","pink","plum","purple","red","rose","salmon","sapphire","scarlet","silver","tan","teal","tomato","turquoise","violet","white","yellow"];const x=e=>(Se("data-v-240ad284"),e=e(),_e(),e),Oe={class:"q-mb-sm"},Ke={class:"text-subtitle1 text-italic q-mb-xl"},He={key:1,class:"fadeIn"},Ye=x(()=>m("p",{class:"text-h6"},[I(" Display Name"),m("br")],-1)),Ge=x(()=>m("br",null,null,-1)),Je=x(()=>m("p",{class:"text-h6"},[I(" Avatar"),m("br")],-1)),Xe=x(()=>m("p",{class:"text-caption"}," Don't worry, you can change your name and avatar later. ",-1)),Ze={class:"row"},et=x(()=>m("p",null,"Input",-1)),tt={key:0,class:"text-subtitle1 text-grey text-center"},at=x(()=>m("br",null,null,-1)),it=x(()=>m("br",null,null,-1)),rt={class:"row"},nt=x(()=>m("p",null,"Output",-1)),lt=x(()=>m("br",null,null,-1)),ot={key:0},st={key:1,class:"text-center"},ct=x(()=>m("div",{class:"exploreItemBackground"},null,-1)),ut=x(()=>m("div",{class:"text-center"},[m("h4",{class:"q-mb-sm"}," Good to go! "),m("p",{class:"text-subtitle1 text-italic q-mb-xl"},"You can change these settings later.")],-1)),dt=ce({name:"FirstTimeSetup",data(){return{showInitialWelcome:!0,transition:!1,step:1,AvatarStoreInterface:X,placesList:new Array,selectedPlace:{}}},computed:{backgroundStyle(){if(v.theme.globalStyle==="none"||this.showInitialWelcome)return this.$q.dark.isActive?"#121212":"#ffffff";const e={aero:"5c",mica:"30"};if(v.theme.windowStyle==="none")return"unset";const i={"gradient-top":"circle at 50% 0%","gradient-right":"circle at 100% 50%","gradient-bottom":"circle at 50% 100%","gradient-left":"circle at 0% 50%"}[v.theme.windowStyle],a=v.theme.colors.primary,n=v.theme.colors.secondary,c=this.$q.dark.isActive?"#121212":"#ffffff",d=e[v.theme.globalStyle];return`radial-gradient(${i}, ${n}${d} 15%, ${a}${d} 40%, ${c}${d} 95%)`},sortedPlaces(){return this.placesList.sort((e,t)=>e.currentAttendance>t.currentAttendance?-1:e.currentAttendance<t.currentAttendance?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0)},hasLocationPending(){return Boolean(v.firstTimeWizard.pendingLocation)}},watch:{step(e){e===2&&T.requestInputAccess()}},methods:{transitionToSteps(){const t=parseFloat(window.getComputedStyle(document.querySelector("#firstTimeSetup .colorSplash")).getPropertyValue("transition").split(" ")[1])/2*1e3;this.transition=!0,window.setTimeout(()=>{this.showInitialWelcome=!1},t)},transitionToStart(){this.transition=!1,this.showInitialWelcome=!0,this.step=1},generateRandomName(){P.avatar.displayName=De({dictionaries:[Re,Me,Ue],separator:" ",length:3,style:"capital"})},selectAvatar(e){e in P.avatar.models&&X.setActiveModel(e)},async loadPlaces(){await we.metaverseConnectionSetup(v.defaultConnectionConfig.DEFAULT_METAVERSE_URL??""),this.placesList=await ke.getActivePlaceList()},completeSetup(){window.localStorage.setItem("hasCompletedSetup","true"),this.hasLocationPending?this.$router.push({path:v.firstTimeWizard.pendingLocation}):this.$router.push({name:"Primary"})}},created(){this.loadPlaces()},beforeMount(){document.documentElement.style.setProperty("--q-primary",v.theme.colors.primary??null),document.documentElement.style.setProperty("--q-secondary",v.theme.colors.secondary??null),document.documentElement.style.setProperty("--q-accent",v.theme.colors.accent??null)},mounted(){document.addEventListener("keydown",e=>{e.key==="Enter"&&this.transitionToSteps(),e.key==="Escape"&&this.transitionToStart()})}}),pt=ce({...dt,setup(e){return(t,i)=>(h(),_("div",{id:"firstTimeSetup",class:"full-height fullscreen",style:$({background:t.backgroundStyle})},[m("span",{class:"colorSplash top",style:$({height:t.transition?"100vh":"10vh",opacity:t.transition?"0":"1"})},null,4),m("span",{class:"colorSplash bottom",style:$({height:t.transition?"60vh":"10vh",opacity:t.transition?"0":"1"})},null,4),t.showInitialWelcome?(h(),_("div",{key:0,class:"initialWelcome fixed-center",style:$({opacity:t.transition?"0":"1"})},[m("h1",Oe,[I(A(y(v).firstTimeWizard.welcomeText)+" ",1),m("span",null,A(y(v).firstTimeWizard.title),1)]),m("p",Ke,A(y(v).firstTimeWizard.tagline),1),r(C,{color:"primary",onClick:i[0]||(i[0]=a=>t.transitionToSteps())},{default:o(()=>[I(A(y(v).firstTimeWizard.buttonText),1)]),_:1}),r(C,{flat:"",color:"primary",class:"q-mt-sm",onClick:i[1]||(i[1]=a=>t.completeSetup())},{default:o(()=>[I("Skip")]),_:1})],4)):(h(),_("main",He,[r(C,{flat:"",round:"",fab:"",icon:"arrow_back",class:"backButton absolute q-mt-sm q-ml-sm",onClick:i[2]||(i[2]=a=>t.transitionToStart())}),r(Ie,{class:"wizardCard"},{default:o(()=>[r(We,{modelValue:t.step,"onUpdate:modelValue":i[14]||(i[14]=a=>t.step=a),"header-nav":"","alternative-labels":"",ref:"stepper",color:"primary",animated:""},{default:o(()=>[r(M,{name:1,title:"Your Avatar",icon:"person","active-icon":"person","active-color":"accent",done:t.step>1,"done-color":"primary","header-nav":t.step>1,class:"stepInner"},{default:o(()=>[Ye,r(Ne,{modelValue:y(P).avatar.displayName,"onUpdate:modelValue":i[4]||(i[4]=a=>y(P).avatar.displayName=a),outlined:""},{append:o(()=>[r(C,{flat:"",dense:"",round:"",icon:"shuffle",title:"Randomize",onClick:i[3]||(i[3]=qe(a=>t.generateRandomName(),["stop"]))},{default:o(()=>[r(ze,null,{default:o(()=>[I(" Randomize ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),Ge,Object.entries(y(P).avatar.models).length>0?(h(),_(Q,{key:0},[Je,r(D,{style:{height:"12rem"}},{default:o(()=>[r(W,null,{default:o(()=>[(h(!0),_(Q,null,V(y(P).avatar.models,(a,n)=>Y((h(),L(te,{key:n,class:"q-mb-sm",clickable:"",active:y(P).avatar.activeModel===n,"active-class":"selectedAvatar",onClick:c=>t.selectAvatar(n.toString())},{default:o(()=>[r(F,{avatar:""},{default:o(()=>[a.image?(h(),L($e,{key:0,src:a.image,draggable:!1,ratio:"1",style:{"border-radius":"7px"}},null,8,["src"])):(h(),L(E,{key:1,name:"mood",size:"lg"}))]),_:2},1024),r(F,null,{default:o(()=>[I(A(a.name),1)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[G]])),128))]),_:1})]),_:1})],64)):Z("",!0),r(H,{spaced:""}),Xe,r(U,{class:"flex stepNavigation",style:$({background:t.$q.dark.isActive?"var(--q-dark)":"#fff"})},{default:o(()=>[r(R),r(C,{color:"primary",label:"Continue",onClick:i[5]||(i[5]=()=>{var a;(a=t.$refs.stepper)==null||a.next()})})]),_:1},8,["style"])]),_:1},8,["done","header-nav"]),r(M,{name:2,title:"Audio",icon:"volume_up","active-icon":"volume_up","active-color":"accent",done:t.step>2,"done-color":"primary","header-nav":t.step>2,class:"stepInner"},{default:o(()=>[m("div",Ze,[r(E,{name:"mic",size:"sm",class:"q-mr-md"}),et]),r(H,{class:"q-mb-sm"}),y(v).audio.user.hasInputAccess?(h(),L(D,{key:1,style:{height:"10rem"}},{default:o(()=>[r(W,null,{default:o(()=>[(h(!0),_(Q,null,V(y(v).audio.inputsList,a=>(h(),_("div",{key:a.deviceId},[r(ae,{label:a.label,val:a.label,color:"primary",modelValue:y(T).selectedInput,"onUpdate:modelValue":i[6]||(i[6]=n=>y(T).selectedInput=n),onClick:n=>y(T).requestInputAccess(a.deviceId)},null,8,["label","val","modelValue","onClick"])]))),128))]),_:1})]),_:1})):(h(),_("p",tt," Please grant mic access to the app in order to speak. ")),at,it,m("div",rt,[r(E,{name:"volume_up",size:"sm",class:"q-mr-md"}),nt]),r(H,{class:"q-mb-sm"}),r(D,{style:{height:"10rem"}},{default:o(()=>[r(W,null,{default:o(()=>[(h(!0),_(Q,null,V(y(v).audio.outputsList,a=>(h(),_("div",{key:a.deviceId},[r(ae,{label:a.label,val:a.label,color:"primary",modelValue:y(T).selectedOutput,"onUpdate:modelValue":i[7]||(i[7]=n=>y(T).selectedOutput=n),onClick:n=>y(T).requestOutputAccess(a.deviceId)},null,8,["label","val","modelValue","onClick"])]))),128))]),_:1})]),_:1}),lt,r(U,{class:"flex stepNavigation",style:$({background:t.$q.dark.isActive?"var(--q-dark)":"#fff"})},{default:o(()=>[r(C,{flat:"",onClick:i[8]||(i[8]=()=>{var a;(a=t.$refs.stepper)==null||a.previous()}),color:"primary",label:"Back",class:"q-ml-sm"}),r(R),r(C,{onClick:i[9]||(i[9]=()=>{var a;(a=t.$refs.stepper)==null||a.next()}),color:"primary",label:"Continue"})]),_:1},8,["style"])]),_:1},8,["done","header-nav"]),r(M,{name:3,title:"Explore",icon:"travel_explore","active-icon":"travel_explore","active-color":"accent","done-color":"primary","header-nav":t.step>3,disable:t.hasLocationPending,class:"stepInner"},{default:o(()=>[t.placesList.length>0?(h(),_("p",ot,"Select a world")):(h(),_("p",st,"Oops! We couldn't find any worlds at the moment.")),r(D,{style:{height:"12rem"}},{default:o(()=>[t.placesList.length>0?(h(),L(W,{key:0},{default:o(()=>[(h(!0),_(Q,null,V(t.sortedPlaces,a=>Y((h(),L(te,{key:a.placeId,clickable:"",class:"exploreItem",style:$({backgroundImage:a.thumbnail?`url(${a.thumbnail})`:""}),active:t.selectedPlace.placeId===a.placeId,"active-class":"selectedPlace",onClick:n=>t.selectedPlace=a},{default:o(()=>[ct,r(F,{top:""},{default:o(()=>[r(ie,{class:ee(["exploreLabel text-no-wrap overflow-hidden",t.$q.dark.isActive?"bg-dark":"bg-white"])},{default:o(()=>[I(A(a.name),1)]),_:2},1032,["class"]),r(ie,{caption:"",class:ee(["exploreLabel text-no-wrap overflow-hidden",t.$q.dark.isActive?"bg-dark":"bg-white"]),title:a.description},{default:o(()=>[I(A(a.description.substring(0,30))+" "+A(a.description.length>30?"...":""),1)]),_:2},1032,["class","title"])]),_:2},1024),r(F,{side:"",top:""},{default:o(()=>[r(Qe,{color:"white","text-color":"black"},{default:o(()=>[I(A(a.currentAttendance)+" ",1),r(E,{name:"people",size:"14px",class:"q-ml-xs"})]),_:2},1024)]),_:2},1024)]),_:2},1032,["style","active","onClick"])),[[G]])),128))]),_:1})):Z("",!0)]),_:1}),r(U,{class:"flex stepNavigation",style:$({background:t.$q.dark.isActive?"var(--q-dark)":"#fff"})},{default:o(()=>[r(C,{flat:"",onClick:i[10]||(i[10]=()=>{var a;(a=t.$refs.stepper)==null||a.previous()}),color:"primary",label:"Back",class:"q-ml-sm"}),r(R),r(C,{color:"primary",onClick:i[11]||(i[11]=()=>{var a;(a=t.$refs.stepper)==null||a.next()}),label:"Next"})]),_:1},8,["style"])]),_:1},8,["header-nav","disable"]),r(M,{name:4,title:"Complete",icon:"done","active-icon":"done","active-color":"accent","done-color":"primary","header-nav":!0,class:"stepInner"},{default:o(()=>[ut,r(U,{class:"flex stepNavigation",style:$({background:t.$q.dark.isActive?"var(--q-dark)":"#fff"})},{default:o(()=>[r(C,{flat:"",onClick:i[12]||(i[12]=()=>{var a;(a=t.$refs.stepper)==null||a.previous()}),color:"primary",label:"Back",class:"q-ml-sm"}),r(R),r(C,{color:"primary",onClick:i[13]||(i[13]=()=>{t.completeSetup()}),label:"Finish"})]),_:1},8,["style"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]))],4))}});var vt=be(pt,[["__scopeId","data-v-240ad284"]]);export{vt as default};
