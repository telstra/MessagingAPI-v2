#!/bin/bash
## auto generating all the SDKs using swagger-codegen

folder="../../test"

for file in ../spec_config/*.json
do	
    if [[ -f $file ]]; then

    	s=${file##*/}
    	fname=${s%.*}

    	mkdir -p ../../test/$fname

		eval openapi-generator generate -i ../docs/swagger/messaging-api-swagger.yaml -l $fname -c $file -o $folder/$fname 
    fi
done

for file in ../spec_config/*.json
do	
    if [[ -f $file ]]; then

    	s=${file##*/}
    	fname=${s%.*}

		# if [ $fname = "php" ]; then
			# eval rm -rf $folder/$fname/docs
			# eval rm -rf $folder/$fname/lib
			# eval cp -rf $folder/$fname/OpenAPIClient-php/* $folder/$fname/
			# eval rm -rf $folder/$fname/OpenAPIClient-php
			# eval ./vendor/bin/phpunit --bootstrap vendor/autoload.php test/
		if [ $fname = "python" ]; then
			# pip install -r test-requirements
			# nosetests ./test/
			echo "python"
		elif [ $fname = "java" ]; then 
			# mvn integration-test
			echo "Java"
		fi

		eval rm $folder/$fname/.!*

		fileloc="../../test/"
		fileloc+=$fname
		fileloc+="/README.md"

		if [ -f $fileloc ]
		then # Introduction  <table><tbody><tr>
			sed -i '' "/$OpenAPI\ Generator/d;/$Send\ and\ receive\ SMS\ and\ MMS\ messages\ globally/d;/$Build\ package/d;s/\*\@dev/\*\@master/g;s/\/OpenAPIClient-php//g;s/\#\ OpenAPIClient\-php/\#\ \Messaging\ SDK/g;/$Build package/d;/$swagger-codegen/d;/$swagger-codegen/d;/$swagger/d;/$OpenAPIClient/d;/$\#\# Author/d;s/\Authorization/\Authorisation/g" $folder/$fname/README.md 
		fi

		rm ../../test/$fname/git_push.sh
		rm ../../test/$fname/.openapi-generator-ignore
		rm -rf ../../test/$fname/.openapi-generator
		rm ../../test/$fname/.DS_Store

		# Runtests
		# if[$file="python"]
		# then
			# eval pip install -r ../../test/$fname/test-requirements.txt
		# elif[$file=""]
		# then

		# fi

    fi
done
