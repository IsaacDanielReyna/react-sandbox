#!/bin/bash
set -ex

main() {
    declare -A local vars=(
        ['IMAGE']="${1}"
        ['TAG']="${2}"
        ['CONTAINER_NAME']="${3}"
        ['EXTERNAL_PORT']="${4}"
        ['INTERNAL_PORT']="${5}"
    )

    validate
    createENV
    deploy
}

validate() {
    local MISSING_ARGUMENTS=()

    for key in "${!vars[@]}"; do
        if [ -z "${vars[${key}]}" ];then
            MISSING_ARGUMENTS+=("${key}")
        fi
    done

    if [ "${#MISSING_ARGUMENTS[@]}" != "0" ];then
        printf "Error! Missing arguments for"
        printf -v joined ' %s,' "${MISSING_ARGUMENTS[@]}"
        echo "${joined%,}"
        exit 1
    fi
}

createENV() {
    echo "IMAGE=${vars['IMAGE']}" > .env
    echo "TAG=${vars['TAG']}" >> .env
    echo "CONTAINER_NAME=${vars['CONTAINER_NAME']}" >> .env
    echo "EXTERNAL_PORT=${vars['EXTERNAL_PORT']}" >> .env
    echo "INTERNAL_PORT=${vars['INTERNAL_PORT']}" >> .env
}

deploy() {
    docker-compose down
    docker-compose up -d
}

main $@
