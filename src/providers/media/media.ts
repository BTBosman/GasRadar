import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  shop: string;
  fuelpump: string;
  man: string;
  mapstyle;
  constructor() {
    this.man = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPgSURBVGhD7ZZ/aNR1GMcX+q+EGEn/dHdBW9PMoVY4TN197zu92/e8nJvubkTZXFloEoQTApWiVvZPq24/MqMDIxiky7adM1FKGOX+EEH/KOd/goG2drtzu5P5fXqez57Z4/mpHCT3GdwbXux4vq/nw/vD7Y4rKeY/4vf7qzBH8e9VZAT5kR/NnuAF3sPioGEIeRWVB6ZMg4NF60Txf+Id1s0NljwnS4eDFnywsxrOtofg4qGQa/mrJnF+DVVz3xXLshZQ+WC1Bfu32/BTWxBy34cBkn9zrDWoLmjbto/XzAt+NpY2RKybN75z7iifT+NGK4eXXsJr5qWluXpT0+aAtryEnLe22ht5zbz0fRT0tzTZ2vIScsjlNfMCP9Q/mDpaM6krL1EOurxmZtxkuE9XXoLOMdbNjdsbKod+Z1R3AQU+c5Mbylg3OzBQs9ztdy7nXwJnl9yks4y12RH4+pGHILEQ4JvSKRIPg5uYt4Afz54cPvyuBzpLQNKd2PcoPzY/5V+Me3YMTFz8cHDCvdLpuX2JS12L4cBg1t1xfPwCOaybGU987Hlvezr95sksfHw2B20nz8PAVy9DMvEKtJ36Vc12npgAcrztqQ28ZlZ88VTYFx+b9LWnoeJQBt4fzKnikv1nsrDkYBrImXJTDq+bEd/B9EJvPD2qCjLln2cg2jMOu/AdeAOpPzIOpV2Z28+ZP2mXjyl8vPGxT/MKzoCxT/iYAqcb5mCh63cXvDfwnbxGZ/BphYvns0yFruBM8HZklvJxhcvjHamQrtxMKO0cXc/HFS653k3RU9/uPV3WMZLVlfw3aId26Qw+rnBxjzsx+h2V7asdjn758wVdYR3k0o76DYZn8HGFy/RFiNHeLed1pXWQO71XvMj/meJFihe5T5EX+b2n4TddaR3kGnURSEa8bn/4Fyp0tSc6rCutg1x1CbUb8fJxhQ2cXjMX+p0913tqz616/QDcC+TSDu3yMebk7ZYX19qxbSAJMPlzcnnNvFixrY/lF7a2vKS4a44ur5mXmthr8/MLV9W9oMifk8trZiYQbbolC6+ubVTIGTmsmxv8PPwhSz8XaVDIGTmsmxs71jQsS1c69Qo5I4d1c4NFh2TplaFahZwhQ6ybG/y3OSFLP7MuopAzclg3N1i0W5ZeEXAUcoZ0s25u8BupS5Ze5g8q5Iwc1s0NFm2VpSvWVCvkDGll3dzgN9JuWfqpVZZCzshh3dzgB7lZln6ycq1Czshh3dzYjdvqZOlFz65WyBk5rJsbK9YckKWfWFGpkDNyWDc3WLQCv5VGCAspe7rSJej19Jwc1ou5MyUlfwFPLZECWlJrYwAAAABJRU5ErkJggg==`;
     this.fuelpump = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARKSURBVGhD7ZZvTBNnHMfrjAX1hdmLZb4ye7FXM1tMfLEsskxIZGYvli2jS4bYXhfsNmPwH4Z/194YdNQ7mC4aREP8M2gVlMFUooJKa0MYG7iACIiwQvgrTOYM1RCX/vY81+cuVyjS9rgryfpJviHP77n2+X36PMedJkaMGDHmAU3xCT6ntsLn0raAM65NTtB3uH3OuCPgjt9Avl4dfHe0+9HCPnDFwRLnic8Z/x5ZRlmQxFs+V9y/QZpYkqDdGYQujZYspxxoJwqERafakuHmaBc0jvfIStNwK7xwvy7KPLy5+ROynHKgX+ycsOCvg3VweerpS/Pdpatw8rfOoHPSeDp2iSIldaXDCVVPXyNLKgM6VvaFROrGp2FH1rdQ5RkTa6bvj0BJg0sc5/10Eay118SxEE/n16KItfYcJFV6uxSVeZkITsbRMrBdaRTHPza1QEWPRxzr9uXCiZY/xLEQqQhXWzaZZPcqKzNXxFp3HcpaO8SG8G7UjPwV0KQ0FT1/wi+T/4jjQ6cqoLz9foBIf+OmjKTKGY+iMnNFjt5qhk93ZwYcp1CDP5uSkc1/Viric65K/eD88zcUlQl2tM7e6wv4lUMKuv7n8cfg6Bvix3NF8FqKyix2j4SShp5+aOzuC6gFE8Ek2meyeRFBxv7kVTIlD7kiLncztJ93zKuHJIKSWOm1kil5yBFpd9hhgMnhj9XcuVBFUOxkSh7hipzpfAAXej3wwFYA4+mpUD86FfS6ZS2y54dS2JaaDh+iXPz8M7jROxD0Opyoigx1GKH+0QTKo3mpftgPaZk0pFMm2JX2JezJzQ96Hc61iSHwtrwZVGSrw/vutrMTd7eX93cnnx65l2R/piNT8pCKKBWpCIbKY7+izBwYzGwNKcknGiJGmkvBIpSZdZGSfKKyI+bD7xORMVKSTzRETAyzhqK5WSyjp20bSVke0RDB4GPF3yc0W0BK8oiWiJ5m9URkKmV/yWpSjhw1RCy2A7dR09NoF0bQ3+M6XfVKHcNoDTQ3zMuY2WzSTuSoIZJTdKgZNywE7QKF16ZoNpWv0ezfpizbOr6hSFFD5O6lt/cazMWbUdNn/I1zRf7VYQXaDb8kzeX4axGi5j2CBQJFNBoksgXX8L2SdpBbS8rhE20RDLpX2nEdPyhJKXyWhwhr5XfFzJWSUvgsBxHKwhmISD0phY+qImaukG+YZo/xixMoC6vz17k7pBQ+aooYLNxO/y/PDgr/bhmGeQU9X2pxHe3UKVyLCDVFyDvWkCCDjlIZyu9EYlbPsO/wTUWCmiIY3KwgIwQdKa/RUvwFuSQy1BbB4HcrI82mIYlCYx77jYFh15OpyImGyJKgp4s/Rq8LJiE1pz9qbXIkgJIpPb6zXLrmQsG9kTYXB91kbun5XE7BvZE2FycmokLCEkHv/uXoAdQm5ICVHsu1ZXqVzO78/D7pmgsG9UbajBEjxv8PjeY/kppuc52D1QoAAAAASUVORK5CYII=`;
     this.shop =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARcSURBVGhD7ZRdTJNXGMffLKadJHObuiw6prbqjTNj2XYzliwz24UzaDI1FDGRxY9rtmzO3RgvdMLNsumMzI8gjsypAfETDFgoXynKMgQrlWB1ihoHi4F+UEzgPDvP8TRpz3mwrRnQuvef/MJLz/+c5//n7cEwZcqUqedDbG3mdJZr/55Tyxz2uikFM+Tad2EmGS9xYQlw2CGVYA7bThkvcbFcWwN12FSCmWS8xMXbN1OHTSWYScZLXM9PkaMvH4NfZ7iiYVvnVEOuzRUN+3pujeY7+Mol1RdBrKl+PEP14SzVxzPJeImJuSyLmcvKoNEK0bDCN7zaX6rkVZfmq7fc13wSsab4xRmqD2cpPsyE2WTM+OIbdqqHgMs6yPLso9rAky81qt5ki4gzVB/O4jM1L88mYz5dAMYLvPUd7YALGZfVYWJgdUa75k22CJ5BeXGm6sVsPKOMO76gwfqpulmwf6b2+sUw54s+1Zt0ETyD8IqZilfAM8q444s3Lqc2k/eDw1/1sOZNtgieQXmJe/LEbymXcWmxNmMGPzSkbebf1TGHnWmDvpg/oHk5POwD1RtBrFF78CzFK2bS9ySEWWVsXazJukXdhIxWZtxUh4hBW1/vo/zMaQlQfkSsEXtGv+FnEX4xm/BjVhlbF6uZ1gG1FlAJ75n5d3jNfFAZKZrdT/nHLlpDlB9hfI3aM1I0q5/y42zKj1llbF3siFEHZfwfl4Lv5wK48clrGr59BZoX8Vd9CN7PMvU9y98E/6lsck+yM1iZUStj62JHjRx1Q7DiHeh0t4B3pT12yMqF0NnWCqGKrBg/4nMfBs/uwlg/x1P0JfjaDmr+Z5nBSo0VMjYt3nRV6OSSoZHjC2CgJh+6PH9Ax42bcLWhFq5/tRq8jizxs7OhTnyO6/9UrwP0Byvfh1vuA+Lzju4euLZ3B3QXZAvwGT/DNfSg91lmYDbMKOM+XX96e5tFmBQEs8mY8fW/KNJzbwD6/GMTSs+DR+Rs5D8t8sOVx/D24WBclh4IwNzvPAJ8pjwR3isNwooTIdjeGJ68IsXuEbDtD8Rlwb4hmPNtlwCfKc/SQ1ggCBvPD8PmC8OwrT7NirzL38DnFSERPpq0KGIvCcAHZUFwVMWGjya1i2y7Btllflh/Rn8DKilZZHHJEGTu6IV5u+/B+qoAGVwlpYpELnD+qQDMK74vSKsi6gXG8GlTJPoCb+JBPi59BKt+HxKhqCK4tox70BtdIMKkF1n0SxA+Kg/GXODIV2nJTw/F71SRt/ga/p4/zhua1CLbm8JQcE4PgeT8Ngh5lU9CUkUcfC3n2GDMnmgmtQgOo0KoUEXiYRah5Gq/esR5paOJovOvh7cnuojnTv9dajaC2WTM+DrtbG0+Xd8KFG3e2xP+Rtp7+sjZAp5Nxowvs4jC1Bepb/mxytlSR9Hi6e3a1RQIbzgbYPHIq/QzW/FdQPCZ8qjg2e7uW9ep2QhmkzFNmTJlKm1lGP8COvpOliMQT/QAAAAASUVORK5CYII=`;
     this.mapstyle = [
      {
          "featureType": "water",
          "stylers": [
              {
                  "saturation": 43
              },
              {
                  "lightness": -11
              },
              {
                  "hue": "#0088ff"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "hue": "#ff0000"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 99
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#808080"
              },
              {
                  "lightness": 54
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ece2d9"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ccdca1"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#767676"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#b8cb93"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.sports_complex",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      }
  ]
  }
  //https://icons8.com/icon/set/shop/color
}
