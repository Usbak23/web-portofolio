export {};

import * as THREE from 'three';

declare module 'meshline' {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    lineWidth: number;
    map: THREE.Texture | null;
    useMap: boolean;
    repeat: THREE.Vector2;
    resolution: THREE.Vector2;
    depthTest: boolean;
    color: THREE.Color;
  }
}
