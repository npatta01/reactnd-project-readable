#!/usr/bin/env bash

( cd frontend ; yarn; yarn build )

( cd api-server; yarn; yarn build )

rm -rf build



