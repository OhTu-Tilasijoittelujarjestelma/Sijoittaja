# Openshift tutorial

Go to this website https://devops.pages.helsinki.fi/guides/platforms/tike-container-platform.html#openshift-client

There is a link for page to choose a binary from here: https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/

For Cubbli linux it should be "/openshift-client-linux-4.20.x"
Open the tarball. Check with "echo $PATH" where your bin folder is and move kubectl and oc to the folder. If you dont have permissions use "sudo mv".

Next configure tab completion "https://docs.redhat.com/en/documentation/openshift_container_platform/4.9/html/cli_tools/openshift-cli-oc#cli-enabling-tab-completion"

Follow the tutorial.
If there/when is permission problems, run "sudo chmod a+r /etc/bash_completion.d/oc_bash_completion"
