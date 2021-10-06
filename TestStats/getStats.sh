#!/bin/sh
curl --request GET ^
	--url 'https://api.sendgrid.com/v3/categories/stats?aggregated_by=day&categories=atlanta' ^
	--header 'authorization: Bearer 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' ^
	--header 'content-type: application/json' ^
	--header 'on-behalf-of: HollySullivan' ^
	--data '{}'