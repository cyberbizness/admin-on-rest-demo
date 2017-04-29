mongoimport --host 10.36.0.22:27017 --db aor-jsonapi-mongodb-demo --collection categories --drop --jsonArray --file categories.json
mongoimport --host 10.36.0.22:27017 --db aor-jsonapi-mongodb-demo --collection commands --drop --jsonArray --file commands.json
mongoimport --host 10.36.0.22:27017 --db aor-jsonapi-mongodb-demo --collection customers --drop --jsonArray --file customers.json
mongoimport --host 10.36.0.22:27017 --db aor-jsonapi-mongodb-demo --collection products --drop --jsonArray --file products.json
mongoimport --host 10.36.0.22:27017 --db aor-jsonapi-mongodb-demo --collection reviews --drop --jsonArray --file reviews.json
mongoimport --host 10.36.0.22:27017 --db aor-jsonapi-mongodb-demo --collection settings --drop --jsonArray --file settings.json
