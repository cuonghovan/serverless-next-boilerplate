function deploy {
  (
    cd $1;\
    echo "Deploying $1 to stage $2..."
    sls deploy --stage $2 --verbose;\
  )
}

deploy ./ $s1
