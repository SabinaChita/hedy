// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "5fQYQPOOOOQO'#Dj'#DjQYQPOOO!ZQPO'#DpO!lQPO'#DiOOQO'#Dv'#DvO!wQPO'#DVOOQO'#Dw'#DwO#SQPO'#DWOOQO'#Dx'#DxO#eQPO'#DXOOQO'#Dy'#DyO#mQPO'#DZOOQO'#Dz'#DzO#xQPO'#D[OOQO'#D{'#D{O$TQPO'#D]OOQO'#DY'#DYOOQO'#D|'#D|O$`QPO'#D^OOQO'#D}'#D}O$qQPO'#D_OOQO'#EP'#EPO$yQPO'#D`OOQO'#ER'#ERO%RQPO'#DaOOQO'#EV'#EVO%^QPO'#DfOOQO'#EW'#EWO%iQPO'#DgOOQO'#EY'#EYO%tQPO'#DhOOQO'#Cx'#CxQ!UQPO'#DkQ%|QPOOOOQO-E7h-E7hOOQO'#Dl'#DlO&zQPO,59eOOQO'#C{'#C{O'YQPO,59eOOQO'#Dp'#DpOOQO-E7n-E7nOOQO-E7t-E7tO'eQPO'#DsOOQO'#C|'#C|O(tQPO'#C|O)OOSO'#EgO)WOQO'#EkOOQO'#DU'#DUOOQO'#Ds'#DsO)`QPO,59rOOQO-E7u-E7uO)tQPO,59sOOQO-E7v-E7vO*PQPO,59uOOQO-E7w-E7wOOQO,59u,59uO*eQPO,59vOOQO-E7x-E7xOOQO,59v,59vO*yQPO,59wOOQO-E7y-E7yOOQO,59w,59wO+_QPO,59xOOQO-E7z-E7zOOQO,59x,59xO+sQPO,59yOOQO-E7{-E7{O+{QPO,59zOOQO-E7}-E7}OOQO-E8P-E8PO,TQPO'#DcOOQO'#Db'#DbOOQO,59{,59{OOQO-E8T-E8TOOQO-E8U-E8UO,`QPO,5:ROOQO-E8W-E8WO,eQPO,5:SO,jQPO,5:VOOQO-E7i-E7iOOQO-E7j-E7jO-nQPO'#DmO.YQPO1G/XO.aQPO'#C|OOQO'#Dm'#DmO.kQPO1G/PO.yQPO1G/XOOQO'#Dr'#DrO/RQPO1G/ZOOQO'#DO'#DOOOQO'#DP'#DPO/dQPO,5:|O/dQPO,5:|OOQO'#Dn'#DnO/lQPO,59lOOOO'#Dt'#DtO/zOSO,5;ROOQO,5;R,5;ROOOO'#Du'#DuO0SOQO,5;VOOQO,5;V,5;VOOQO-E7q-E7qOOQO'#EO'#EOO0[QPO1G/eOOQO'#EQ'#EQO0dQPO1G/fO0lQPO,59}OOQO'#ET'#ETO1QQPO,5:OOOQO'#EU'#EUO1YQPO,5:POOQO'#EX'#EXO1bQPO1G/mO1mQPO1G/nO1xQPO'#DqO2QQPO7+$sOOQO-E7k-E7kOOQO-E7p-E7pO2]QPO7+$uOOQO1G0h1G0hO2qQPO1G0hOOQO-E7l-E7lOOQO'#Do'#DoO3cQPO1G/WOOQO1G/W1G/WOOOO-E7r-E7rOOQO1G0m1G0mOOOO-E7s-E7sOOQO1G0q1G0qOOQO-E7|-E7|OOQO7+%P7+%POOQO-E8O-E8OOOQO7+%Q7+%QO3zQPO1G/iOOQO'#ES'#ESO4`QPO1G/iOOQO1G/i1G/iOOQO-E8R-E8ROOQO1G/j1G/jOOQO-E8S-E8SOOQO1G/k1G/kOOQO-E8V-E8VOOQO'#EZ'#EZO4kQPO7+%YOOQO7+%Y7+%YO4vQPO,5:]OOQO,5:],5:]OOQO-E7o-E7oOOQO-E7m-E7mOOQO-E8Q-E8QOOQO-E8X-E8XO5UQPO<<HtOOQO'#E['#E[O5ZQPOAN>`OOQO-E8Y-E8YOOQOG23zG23z",
  stateData: "5i~OjOS#ROS~OShOUjOVVOWZOX]OY_OZbO[XO^dO`fObTOelOgnOnRO#SPO~O]tO#TvOn!dX#P!dX#S!dX~OnxO#P!]X#S!]X~ObTO#PyX#SyX~OVVOn}Oq|O#[!OO#`!PO~O[XOnxO~OWZOn}Oq|O~OX]On}Oq|O~OY_On}Oq|O~OZbOn}Oq|O#P!QX#S!QX~O^dOnxO~O`fOnxO~OShOn!iOq!iO~OUjO#P!YX#S!YX~OelOn!nOq!nO~OgnOn!pO~OShOUjOVVOWZOX]OY_OZbO[XO^dO`fObTOelOgnOnRO~OP!zO]tOn!vOq!uO~OP!zOn!vOq!uO~O#V!|O#W!|O#X!}O#Y!}On!gXq!gX#P!gX#S!gX#[!gX#`!gX~OQ#QOnpXqpX#PpX#SpX#VpX#WpX#XpX#YpX~O#[pX#`pX~P(VO#]#SO#^#UO~O#a#VO#b#XO~On}Oq|O#[!OO#`!PO#Pza#Sza~OnxO#P{a#S{a~O#V!|O#W!|O#X!}O#Y!}O#P}a#S}a~O#V!|O#W!|O#X!}O#Y!}O#P!Oa#S!Oa~O#V!|O#W!|O#X!}O#Y!}O#P!Pa#S!Pa~O#V!|O#W!|O#X!}O#Y!}O#P!Qa#S!Qa~Oa#ZOnxO~O_#]OnxO~O]tOc#`Od#bO~Of#dO~Oc#`O~O#SPOS!_aU!_aV!_aW!_aX!_aY!_aZ!_a[!_a^!_a`!_ab!_ae!_ag!_an!_a#P!_a~O#V!|O#W!|O#X!}O#Y!}On!aXq!aX#P!aX#S!aX~Ov#gO~P(YOn!dXv!dX~P(VOn}Oq|O#Pmi#Smi~OnxOv#gO~OP!zOn}Oq|O#[!OO#`!PO~On|Oq|O~OQ#QOR#oOn#qOq#qO~O#]#SO#^#sO~O#a#VO#b#uO~Oa#ZOn#wO~O_#]On#yO~OT#{O]tOn|Oq|O#[!OO#`!PO~Oc#`On$PO~Od#bOn$RO~Of#dO#P!Zi#S!Zi~Oc#`Oi$TOn$VO~OnxOq$XO~Ov#gO#Puq#Suq~On}Oq|O#[!OO#`!PO#Pwq#Swq~O#V!|O#W!|O#X!}O#Y!}On#Uiq#Ui#P#Ui#S#Ui#[#Ui#`#Ui~OR#oOntiqti#Pti#Sti#[ti#`ti~O#V!|O#W!|O#X!}O#Y!}O#P!Vi#S!Vi~OT#{O#P!Vi#S!Vi~Oi$TOn$^Oq$^O~OnxOv!ea#P!ea#S!ea~Oh$_O~Oh$_On$bOq$bO~Oqn~",
  goto: ",Q#`PPPPPPPPPPPPPPPPPPPPPPPPPPPP#a#fP#k#nP$`$j$t#fP#f%]#f#f#f#f%f%f%f#f#f#f#f%k%n%n%n#f#f#f#f%q%{&S&^&e&l&r'a'h'o'y(P(V(_(g(o(w)P)X)a)i)o)w)}*V*]*g*m*u*}+T+]+cPPPPP+iPPPP+yPPP+yVqOQrVpOQrRwRW{W!S!{#kQ!W[Q!Z^Q!^`Q!acU!tuw!xQ#l#OQ#m#PR#z#_a#O{!W!Z!^!a!t#m#za#P{!W!Z!^!a!t#m#zW!RW!S!{#kQ!Y[Q!]^Q!``Q!ccV!wuw!xW!RW!S!{#kR#}#_VaOQrR!kiR!jiQQOSsQ!qR!qqSrOQR!rrQuRS!su#_R#_!iS!xuwR#i!xS#R}!vR#n#RQ#p#RR$Z#pUSOQr[yS!U!d!f!y$WQ!UYQ!deQ!fgS!yuwR$W#gS#h!u!yR$Y#hS!{uwR#j!{Q!SWS#Y!S#kR#k!{Q#T!OR#r#TQ#W!PR#t#WUUOQrRzUUWOQrR!TWUYOQrR!VYU[OQrR!X[U^OQrR![^U`OQrR!_`UcOQrR!bcUeOQrR!eeQ#[!dR#v#[UgOQrR!ggQ#^!fR#x#^UiOQrR!hiQ#|#_R$[#|Q#a!iQ#f!pT$O#a#fQ#c!iR$Q#cUkOQrR!lkUmOQrR!mmQ#e!nR$S#eUoOQrR!ooQ$U#fR$]$UQ$`$^R$a$`m|W[^`cuw!S!x!{#O#P#_#kZ!QW!S!{#_#k",
  nodeNames: "⚠ ask at random if pressed else print forward turn color sleep play is add from remove toList clear in not_in repeat times for to range Comment Program Command Assign Text Op Expression Int Op Op ListAccess AssignList Comma Ask String Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck Else Repeat For ErrorInvalid",
  maxTerm: 110,
  nodeProps: [
    ["group", 44,"turtle"]
  ],
  skippedNodes: [0,26],
  repeatNodeCount: 33,
  tokenData: "*x~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`*s!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^n~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO#S~~&`O#R~~&eO#[~~&jSj~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#`~~'WO#V~~']O#X~~'bOv~~'gO#Y~~'lO#W~~'s!Oq~n~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*xO#T~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#b~~", 14, 109), new LocalTokenGroup("_~RQYZXrsX~^O#^~~", 14, 105)],
  topRules: {"Program":[0,27]},
  dynamicPrecedences: {"59":-10},
  specialized: [{term: 30, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 30, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 942
})
