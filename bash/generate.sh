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
			eval mv -f $folder/$fname/SwaggerClient-php/* $folder/$fname/
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

		fileloc="../../test/"
		fileloc+=$fname
		fileloc+="/README.md"

		if [ -f $fileloc ]
		then
			sed -i '' "/$Swagger Codegen/d" $folder/$fname/README.md 
			sed -i '' "/$Build package/d" $folder/$fname/README.md
			sed -i '' "/$swagger-codegen/d" $folder/$fname/README.md
			sed -i '' "/$swagger/d" $folder/$fname/README.md
			sed -i '' "/$Swagger/d" $folder/$fname/README.md
			sed -i '' "/$SwaggerClient-php/d" $folder/$fname/README.md
			sed -i '' "/$Author/d" $folder/$fname/README.md
		fi

		rm ../../test/$fname/git_push.sh

		# Runtests
		# if[$file="python"]
		# then
			# eval pip install -r ../../test/$fname/test-requirements.txt
		# elif[$file=""]
		# then

		# fi

    fi
done
