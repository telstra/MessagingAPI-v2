#!/bin/bash
## auto generating all the SDKs using swagger-codegen

folder="../../test"

for file in ../spec_config/*.json
do	
    if [[ -f $file ]]; then

    	s=${file##*/}
    	fname=${s%.*}

    	mkdir -p ../../test/$fname

		eval swagger-codegen generate -i ../docs/swagger/messaging-api-swagger.yaml -l $fname -c $file -o $folder/$fname 
    fi
done

for file in ../spec_config/*.json
do	
    if [[ -f $file ]]; then

    	s=${file##*/}
    	fname=${s%.*}

		if [ $fname = "php" ]; then
			eval rm -rf $folder/$fname/docs
			eval rm -rf $folder/$fname/lib
			eval cp -rf $folder/$fname/SwaggerClient-php/* $folder/$fname/
			eval rm -rf $folder/$fname/SwaggerClient-php
			# eval ./vendor/bin/phpunit --bootstrap vendor/autoload.php test/
		elif [ $fname = "python" ]; then
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
		then
			sed -i '' "/$Swagger\ Codegen/d;/$Build\ package/d;s/\*\@dev/\*\@master/g;s/\/SwaggerClient-php//g;s/\#\ SwaggerClient\-php/\#\ \Messaging\ SDK/g;/$Build package/d;/$swagger-codegen/d;/$swagger-codegen/d;/$swagger/d;/$SwaggerClient/d;/$\#\# Author/d;s/\Authorization/\Authorisation/g" $folder/$fname/README.md 
		fi

		rm ../../test/$fname/git_push.sh
		rm ../../test/$fname/.swagger-codegen-ignore
		rm -rf ../../test/$fname/.swagger-codegen
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
