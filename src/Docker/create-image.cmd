docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tdven/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tdven/app ../..
