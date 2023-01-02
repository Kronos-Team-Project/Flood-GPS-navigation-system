<h1 align="center">2022 Korea Code Fair [ KRONOS ]</h1>
<h1 align="center">차량 침수피해를 예방하는 길찾기 서비스</h1>



## Service INFO
This service was designed to prevent vehicle flooding accidents caused by road flooding caused by heavy rains caused by abnormal weather.

It guides you by avoiding roads with frequent flooding accidents repeatedly through road and area data that have previously been flooded.
When the user enters the starting point and the arrival point, the color is displayed differently on the map as many times as it occurs, indicating the flooding information, and in conjunction with the Tmap API, on the Tmap's route
It guides you to bypass when roads that flood frequently overlap.
(1 time: gray, 2 to 6 times: yellow, 7 to 20: orange, 20 to red)

This function causes unnecessary if it is not raining due to weather conditions.
To prevent this, the Meteorological Agency API was combined. The service has been developed to operate only when rain is forecast at road guidance locations.

이 서비스는 이상기후로 인한 폭우로 발생되는 도로침수를 원인으로한 차량침수 사고를 예방하기 위해 구상되었다.

이전에 침수가 일어났던 도로 및 지역 데이터를 통하여 반복적으로 침수사고가 빈번한 도로를 피하여 안내한다.
이용자가 출발지점과 도착지점을 입력했을떄, 일어난 횟수만큼 지도에 색깔을 다르게 나타내어 침수 정보를 나타내며, Tmap API와 연동하여 Tmap의 길안내 경로에서
침수가 다발적으로 일어나는 도로가 중첩될시 우회하도록 안내한다.
(1회 : 회색, 2 ~ 6회 : 노란색, 7 ~ 20 : 주황색, 20 ~ : 빨간색)

이 기능은 기상조건상 비가 내리는 상황이 아닌경우, 오히려 불필요함을 야기한다.
이를 막고자 기상청 API를 결합하였다. 길안내 위치에 우천이 예보되는 경우에서만 이 서비스가 작동되도록 한다.


## Service Capture
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2a410da9-dc63-44e5-804c-2a9fb16ba226/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230102T200216Z&X-Amz-Expires=86400&X-Amz-Signature=fea9fdd9720065022b62547b5cb2f6b3706279113ea6083e349cf4f540900ee5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"></img>

<img src="해커톤 본선 영상 1.gif"></img>

## Flood Avoidance Technology
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7ad17e16-f6c1-4cac-b81b-4a6a2af5154c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230102T201033Z&X-Amz-Expires=86400&X-Amz-Signature=197735a59fd88019512ee1c844e4db5d2b43a6dab18d7d8574ddb7569f45f923&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"></img>

Point at coordinates where flooding occurs repeatedly and periodically. 
Draw a circle with a diameter over a certain distance, focusing on that point. 
After drawing a straight line that becomes the tangent of the circle, the road there is designated as an alternative route..

1. 반복적이고 주기적으로 침수가 발생하는 곳의 좌표를 기준으로 점을 찍는다. 
2. 그 점을 중심으로 일정 거리의 지름이 있는 원을 그립니다. 
3. 원의 접선이 되는 직선을 그은 후, 접선 주변의 도로를 대체 경로로 지정합니다. 
