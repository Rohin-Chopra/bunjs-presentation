#!/bin/sh
export AWS_ACCESS_KEY_ID="ASIASHFUBKMHVBKNZLS6"
export AWS_SECRET_ACCESS_KEY="wVCi+tK0xFYmuJm7FKXmp/FnF2rFbLwXA0tixFyw"
export AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjEID//////////wEaCWV1LXdlc3QtMiJHMEUCIFC47enoobPGStKmyCr8QuNHvWFWBhnqOfu6BeIUgY0uAiEAxm6l5Q/9iVkA9binLwsWdkN8SpVfgDCHtFGoGIiRpZAqmAMIWRAEGgwxNTI4NDg5MTMxNjciDCNmXcGsdCwYCkACeCr1AneQSS/1X8KoWX1+7FQktclwZSx+OmXfMAI6bkbnB8e1oEJpdtz19bj5Jz2OMR6JPPM15WxEX5XvZVBneON362HhPkdCq5U8Zukzib+3Cfle+gu0FzLDTuMtKE37f/BFoWbu1ypGpraMASiMKoB2lc7aQLGx4cOs9biCrv8AB/QFSsSPZZwaqOsX7zj07DumUho097BdJjtdIR5GJI7mzNCfZlbt6aX50ghqNequqDWNm1wGqejqSwu6Kt3mSeg1apHQrUbs4+lM2B2rBqa5t37RJQD52sn0Zll1bZtUuShtNBK7chLJarhHdDy1f5I6YTCYRi6PsV0BsddTyev7Zut0/LESNqfPIL/eDXyFusiRzLVwtPo+sQ9dPAZcr7x6rPdjoSm5VBLaOUI07gTh8onDhNb3FUfnNDiI41rdJoQXmM3QbLWKqbRKQq3aQFSEqCbJwgr9+ttbHouimt+gGaoUcGoWNscYRp5+Sq0SxW5OlBOlz6ow+fLDmgY6pgH+SZPno2HCXDisqrgqUTG4mxVP92YYx2PMohx3Hxka+XgHEroljNujDDBxwRg1Qmg0dpY6i6aoh6+8HLZcfMzf8tGzUD7k8y6HkxzSKC2oD4jM4jtWdGazo4f3XbfVRIdMAib/8m07KDwfP0gLQ7waytbWWjQTKFURO4OPjhfR9gB+KT2/BbpnIPnx3B8Od/0dV91/gKoOZoeJ5DOHdKn6H//xZPgd"

rm deployment.zip
rm -rf deployment

echo "zipping deployment"
zip -r deployment.zip .

echo "deploying to aws"
aws lambda update-function-code \
    --function-name bunjs-lambda \
    --zip-file fileb://deployment.zip
echo "deployed to aws"

exit 0
