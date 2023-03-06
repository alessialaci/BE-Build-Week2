# BE-Build-Week2
Web Service Spring Boot - Build Week 2  
  
## Istruzioni
- Creare un database con nome Epic_Energy_Services  
  
  
Per Spring Boot:
- Cambiare nel file application.properties i valori di username e password se diversi
- Scommentare i metodi popolaDb() e popolaDb2()
- Fare run
- Ricommentare i metodi popolaDb() e popolaDb2()  
  
  
Per Angular:
- Comando <code>npm i</code> per installare i node_modules
- Comando <code>ng serve -o</code>  
  
  
## Tutte le routes

### Libere
/home (libera)  
/auth/login (libera)  
/auth/logout (libera?)  
  
  
### Chiamate CRUD
- GET (user+admin)
- GET_BY_ID (user+admin)
- GET_IN_PAGES (user+admin)
- PUT (admin)
- POST (admin)
- DELETE (admin)

/utenti  
/utenti/{id}  
/utenti_page  
  
  
/comuni  
/comuni/{id}  
/comuni_page  
  
  
/province  
/province/{id}  
/province_page  
  
  
/indirizzi  
/indirizzi/{id}  
/indirizzi/page  
  
  
/fatture  
/fatture/{id}  
/fatture_page  
  
  
/clienti  
/clienti/{id}  
/clienti_page  
  
  
### Filtra clienti in base a:
/clienti/cercaFatturato  
/clienti/cercaDataInserimento  
/clienti/cercaDataUltimoContatto  
/clienti/cercaNome  
  
  
### Ordina clienti in base al parametro:
/clienti_page?page=0&size=3&sort=ragioneSociale  
/clienti_page?page=0&size=3&sort=fatturatoAnnuale  
/clienti_page?page=0&size=3&sort=dataInserimento  
/clienti_page?page=0&size=3&sort=dataUltimoContatto  
/clienti/ordinaPerSedeLegale  
  
  
### Filtra fatture in base a:
/fatture/cercaCliente?cliente=1  
/fatture/cercaStato?stato=PAGATA  
/fatture/cercaData?data=2021-05-12  
/fatture/cercaAnno?anno=2021  
/fatture/cercaImporto?min=500&max=2000  
