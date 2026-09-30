# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 32
commande: git rev-list --count depart

Q02: Sara Benali
commande: git blame -L :formaterLigne src/format.js

Q03: 4459c91715f9b1c97cf4776ad2e5afbdb3aa7051
commande: git bisect start depart v0.2.0  && git bisect run node scripts/controle-alertes.js

Q04: API_KEY=sk_live_01de6ba0c9f4d846
commande: git log --all --oneline -i -G "api.?key|secret|token" ; git --no-pager  show 11544ab

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git log --all --diff-filter=D  --oneline -- .env ;  git rev-parse <sha>

Q06: 17
commande: git rev-list --count v0.2.0..v1.0.0

Q07: 
commande: 

Q08: 
commande: 

Q09: 
commande: 

Q10: 
commande: 

Q11: 
commande: 

Q12: 
commande: 

Q13: 
commande: 

Q14: 
commande: 

Q15: 
commande: 
