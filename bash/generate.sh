#!/bin/bash
## auto generating all the SDKs using swagger-codegen

folder="../../test"

for file in ../spec_config/*.json
do	
    if [[ -f $file ]]; then

    	s=${file##*/}
    	fname=${s%.*}

    	mkdir -p ../../test/$fname

		eval swagger-codegen generate -i ../docs/swagger/messaging-api-swagger.yaml -l $fname -c $file -o ../../test/$fname

		rm ../../test/$fname/git_push.sh

		fileloc="../../test/"
		fileloc+=$fname
		fileloc+="/README.md"

		if [ -f $fileloc ]
		then
			sed -i '' "/$Swagger Codegen/d" $folder/$fname/README.md 
			sed -i '' "/$Build package/d" $folder/$fname/README.md
			sed -i '' "/$swagger-codegen/d" $folder/$fname/README.md
			sed -i '' "/$Author/d" $folder/$fname/README.md
		fi

    fi
done

