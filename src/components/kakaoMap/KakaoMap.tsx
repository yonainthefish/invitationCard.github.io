import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  return (
    <>
      <Map
        center={{ lat: 37.140029, lng: 127.050354 }}
        style={{ width: '100%', height: '200px' }}
        level={3}
      >
        <MapMarker position={{ lat: 37.140029, lng: 127.050354 }} />
      </Map>
    </>
  );
}
