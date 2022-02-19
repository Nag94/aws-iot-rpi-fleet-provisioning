// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export const CONFIG = {
    // e.g. ssh-rsa AAAA.......BBBB username@example.com
    'sshPublicKey': 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQD8NAp83UZG9gTZ5JDTH89A3Fo2YJO4zyDLdbwg4Ur33DIOw2d7IBiIXiwM2xmhHRImicqHmatMFP5pnunuxOazm+rK4gTEiGWpqZX/Rkoyl/WGw1Q09CKR50Snwgw2y+RZzxSx+FNvGdVVsoSYLRStnHRhJqelDDFE6qFs8Lk4pYPJqaJnCRvfBAE2UQMEfRB0qm9snBOVMMUHqx1Bh4mRrVnER4caN+BQLnD0SaHJ+4tEYbaXcfLn+Y8BfSXxa9oMB8aBun1zR/z3TN6568a/5n8ru0DgGJCfXHHdzE7zB/RD73B/ZAPKFxtZslTuqeCQcnp5eCnNCRKdRKDjSVNqn9tFSshVar/hHO12qlNc0wtCiBSMhRtzN1XWweFxuKDY+IE+YFr/OV+GeBLxwf6QdEYTs/1+0Eqipr0KkC2doS9f1MUQxNVPOM9ud2/liDYfldRc1pXGA/ei25I8re2j52CSUnmqC4R0GrwwzsHL9MqEI1cisLFSCF+NpIQdPmJQGPykF2c2PabnntTCfkXfiqmJ1Hl7wgnJd8Q5nPf0Z2xjP5yhIjwj5AgQ1XCvVehdGLwtM0RrKpQJbC0omdZ0gbM/f09/GtwAkEC326FSLypYjxHxxZ2IQxayF4nRcVG16Ofj6N51lZxUXqqDiEZtqd79WGKP9ujKkqiIjw9htQ== morgan@believe.fr',
    // Name of the secret where the Wifi password is stored
    'wifiPasswordSecretName': 'RPI_WIFI_PASSWORD',
    // For more information on how to configure Wifi SSID and Country
    // see https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md
    'wifiCountry': 'FR',
    'wifiSsid': 'IFR_IOT',
};
