# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 
commande: 

Q02: 
commande: 

Q03: 
commande: 

Q04: 
commande: 

Q05: 
commande: 

Q06: 
commande: 

Q07: essai-perf
commande: git for-each-ref refs/tags --format='%(objecttype) %(refname:short)'

Q08: experiment/cache-redis
commande: git branch -r --no-contains v1.0.0 --no-merged origin/main

Q09: Son chemin d'origine était src/utils.js
commande: git log --follow --oneline --name-only -- src/outils.js

Q10: Nathan Robin, qui a fait 15 commits depuis le début.
commande: git shortlog -sn

Q11: 2026-03-24
commande: git show v1.0.0

Q12: "feat(cli): bannière de démarrage"
commande: git log --grep="Revert"

Q13: de5637a7c2ec4e7458525081fd1d1e9b237f0708
commande: git log --grep="Merge branch 'fix/valeur-totale'" (le texte recherché dans le grep est fait par défaut par git donc facilement retrouvable)

Q14: 16 lignes.
commande: git diff --numstat v0.1.0 v1.0.0 -- src/stock.js

Q15: 6d6b9207651255c22dd0f084b0cf793faed17f31	
commande: git log -S "TODO: gérer les quantités négatives"