// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "4pQYQPOOOOQO'#Dg'#DgQYQPOOO!WQPO'#DmO!lQPO'#DeOOQO'#Ds'#DsO!zQPO'#DSO#YQPO'#DTOOQO'#Dt'#DtO#hQPO'#DUOOQO'#Du'#DuO#pQPO'#DWOOQO'#Dv'#DvO#{QPO'#DXOOQO'#Dw'#DwO$WQPO'#DYOOQO'#DV'#DVOOQO'#Dx'#DxO$cQPO'#DZOOQO'#Dy'#DyO$wQPO'#D[OOQO'#D{'#D{O%PQPO'#D]OOQO'#D}'#D}O%XQPO'#D^OOQO'#ER'#ERO%dQPO'#DdOOQO'#ET'#ETO&gQPO'#DfOOQO'#Cu'#CuQ!RQPO'#DhQ&nQPOOOOQO-E7e-E7eOOQO'#Di'#DiO&uQPO,59bOOQO'#Cx'#CxO'TQPO,59bOOQO'#Dm'#DmOOQO-E7k-E7kOOQO-E7q-E7qO'`QPO'#DpOOQO'#Cy'#CyO(uQPO'#CyO)POSO'#E`O)XOQO'#EdOOQO'#DR'#DROOQO'#Dp'#DpO)aQPO,59oO)xQPO,59pOOQO-E7r-E7rO*WQPO,59rOOQO-E7s-E7sOOQO,59r,59rO*oQPO,59sOOQO-E7t-E7tOOQO,59s,59sO+WQPO,59tOOQO-E7u-E7uOOQO,59t,59tO+oQPO,59uOOQO-E7v-E7vOOQO,59u,59uO,WQPO,59vOOQO-E7w-E7wO,`QPO,59wOOQO-E7y-E7yOOQO-E7{-E7{O,hQPO'#D`OOQO'#D_'#D_O`QPO,59xOOQO-E8P-E8PO,sQPO,5:OO`QPO,5:QOOQO'#Dc'#DcOOQO-E8R-E8ROOQO,5:Q,5:QO,xQPO,5:SOOQO-E7f-E7fOOQO-E7g-E7gO-yQPO'#DjO.hQPO1G/UO.oQPO'#CyOOQO'#Dj'#DjO.yQPO1G.|O/[QPO1G/UOOQO'#Do'#DoO/dQPO1G/WOOQO'#C{'#C{OOQO'#C|'#C|O/uQPO,5:uO/uQPO,5:uOOQO'#Dk'#DkO/}QPO,59iOOOO'#Dq'#DqO0]OSO,5:zOOQO,5:z,5:zOOOO'#Dr'#DrO0eOQO,5;OOOQO,5;O,5;OOOQO-E7n-E7nOOQO'#Dz'#DzO0mQPO1G/bOOQO'#D|'#D|O0uQPO1G/cO0}QPO,59zOOQO'#EP'#EPO1cQPO,59{OOQO'#EQ'#EQO1kQPO,59|O`QPO1G/dO1sQPO1G/dOOQO'#ES'#ESO2OQPO1G/jOOQO1G/l1G/lO2`QPO'#DnO2hQPO7+$pOOQO-E7h-E7hOOQO-E7m-E7mO2vQPO7+$rOOQO1G0a1G0aO3_QPO1G0aOOQO-E7i-E7iOOQO'#Dl'#DlO4rQPO1G/TOOQO1G/T1G/TOOOO-E7o-E7oOOQO1G0f1G0fOOOO-E7p-E7pOOQO1G0j1G0jOOQO-E7x-E7xOOQO7+$|7+$|OOQO-E7z-E7zOOQO7+$}7+$}O6UQPO1G/fOOQO'#EO'#EOO6fQPO1G/fOOQO1G/f1G/fOOQO-E7}-E7}OOQO1G/g1G/gOOQO-E8O-E8OOOQO1G/h1G/hO6mQPO7+%OOOQO7+%O7+%OOOQO-E8Q-E8QOOQO7+%U7+%UO6xQPO,5:YOOQO,5:Y,5:YOOQO-E7l-E7lOOQO-E7j-E7jOOQO-E7|-E7|OOQO<<Hj<<Hj",
  stateData: "7^~OgOS!zOS~OSgOUkOVVOWYOX[OY^OZaO[WO^cO`eObTOeiOkRO!{PO~O]qO!|sOk!aX!x!aX!{!aXU!aX~OkuO!x!XX!{!XXU!XX~ObTO!xvX!{vXUvX~OkzOnyO#T{O#X|O~O[WOkuO~OWYOkzOnyO~OX[OkzOnyO~OY^OkzOnyO~OZaOkzOnyO!x}X!{}XU}X~O^cOkuO~O`eOkuO~OSgOk!eOn!eO~OeiOk!iOn!iO~OUkOVVOWYOX[OY^OZaO[WO^cO`eObTOeiOkRO~O!{PO~P%oOSgO~P%oOP!wO]qOk!sOn!rO~OP!wOk!sOn!rO~O#O!yO#P!yO#Q!zO#R!zOk!dXn!dX!x!dX!{!dX#T!dX#X!dXU!dX~OQ!}OkmXnmX!xmX!{mX#OmX#PmX#QmX#RmXUmX~O#TmX#XmX~P(TO#U#PO#V#RO~O#Y#SO#Z#UO~OkzOnyO#T{O#X|O!xwa!{waUwa~OkuO!xxa!{xaUxa~O#O!yO#P!yO#Q!zO#R!zO!xza!{zaUza~O#O!yO#P!yO#Q!zO#R!zO!x{a!{{aU{a~O#O!yO#P!yO#Q!zO#R!zO!x|a!{|aU|a~O#O!yO#P!yO#Q!zO#R!zO!x}a!{}aU}a~Oa#WOkuO~O_#YOkuO~O]qOc#]Od#_O~Of#cO~O!{POS![aU![aV![aW![aX![aY![aZ![a[![a^![a`![ab![ae![ak![a!x![a~O#O!yO#P!yO#Q!zO#R!zOk!^Xn!^X!x!^X!{!^XU!^X~Os#fO~P(WOk!aXs!aX~P(TOkzOnyO!xji!{jiUji~OkuOs#fO~OP!wOkzOnyO#T{O#X|O~OkyOnyO~OQ!}OR#nOk#pOn#pO~O#U#PO#V#rO~O#Y#SO#Z#tO~Oa#WOk#vO~O_#YOk#xO~OT#zO]qOkyOnyO#T{O#X|O~Oc#]Ok$OO~Od#_Ok$QO~OUkO!x!Qi!{!Qi~OSgOf#cO!x!Wi!{!Wi~P%oOkuOn$WO~Os#fO!xrq!{rqUrq~OkzOnyO#T{O#X|O!xtq!{tqUtq~O#O!yO#P!yO#Q!zO#R!zOk!}in!}i!x!}i!{!}i#T!}i#X!}iV!}iW!}iX!}iY!}iZ!}i[!}i^!}i`!}ib!}ie!}iU!}i~OR#nOkqinqi!xqi!{qi#Tqi#XqiUqi~OV!SiW!SiX!SiY!SiZ!Si[!Si^!Si`!Sib!Sie!Sik!Si!{!Si~O#O!yO#P!yO#Q!zO#R!zO~P5^OT#zO~P5^OUkO!x!Qq!{!Qq~OkuOs!ba!x!ba!{!baU!ba~Onk~",
  goto: "-h#XPPPPPPPPPPPPPPPPPPPPPPPPP#Y#bP#n#qP$c$m$w#bP#b%`#b#b#b#b%i%i%i#b#b#b%s%y%|%|%|&P#b#b&]&i&{'S'^'e'l'r(f(m(t)O)U)[)i)v*T*b*o*|+Z+a+n+t+},T,Z,a,n,tPPPPP-PPPPP-aPPP-aUnOQoR$U#dWmOQo#dX!kl!g!j#aRtRWxV!P!x#jQ!SZQ!V]Q!Y_Q!]bU!qrt!uQ#k!{Q#l!|R#y#[a!{x!S!V!Y!]!q#l#ya!|x!S!V!Y!]!q#l#yW!OV!P!x#jQ!UZQ!X]Q![_Q!_bV!trt!uW!OV!P!x#jR#|#[a`OQlo!g!j#a#dXmOQo#dR!ghR!fhQ!mlQ#b!gQ#e!jR$R#aWmOQo#dQ$S#bR$[$RQQOWpQ!j!n#aQ!jlQ!nnR#a!gSoOQR!ooQrRS!pr#[R#[!eS!urtR#h!uS#Oz!sR#m#OQ#o#OR$Y#o`SOQlo!g!j#a#d[vS!Q!`!b!v$VQ!QXQ!`dQ!bfS!vrtR$V#fS#g!r!vR$X#gS!xrtR#i!xQ!PVS#V!P#jR#j!xQ#Q{R#q#QQ#T|R#s#T`UOQlo!g!j#a#dRwU`XOQlo!g!j#a#dR!RX`ZOQlo!g!j#a#dR!TZ`]OQlo!g!j#a#dR!W]`_OQlo!g!j#a#dR!Z_`bOQlo!g!j#a#dR!^b`dOQlo!g!j#a#dR!adQ#X!`R#u#X`fOQlo!g!j#a#dR!cfQ#Z!bR#w#ZWhOQo#dR!dhQ#{#[R$Z#{Q#^!eR#}#^Q#`!eR$P#``jOQlo!g!j#a#dR!hjQ#d!iR$T#d[lOQo#b#d$RR!llmyVZ]_brt!P!u!x!{!|#[#jZ}V!P!x#[#j",
  nodeNames: "⚠ ask at random if pressed else print forward turn color sleep play is add from remove toList clear in not_in repeat times Comment Program Command Assign Text Op Expression Int Op Op ListAccess AssignList Comma Ask String Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck IfLessCommand Repeat ErrorInvalid Else",
  maxTerm: 103,
  nodeProps: [
    ["group", 41,"turtle"]
  ],
  skippedNodes: [0,23],
  repeatNodeCount: 29,
  tokenData: "*x~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`*s!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^k~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO!{~~&`O!z~~&eO#T~~&jSg~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#X~~'WO#O~~']O#Q~~'bOs~~'gO#R~~'lO#P~~'s!On~k~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*xO!|~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#Z~~", 14, 102), new LocalTokenGroup("_~RQYZXrsX~^O#V~~", 14, 98)],
  topRules: {"Program":[0,24]},
  dynamicPrecedences: {"55":-10},
  specialized: [{term: 27, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 27, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1023
})
