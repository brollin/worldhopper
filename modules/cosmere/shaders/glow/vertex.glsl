uniform vec3 viewVector;
uniform float c;
uniform float p;
uniform float uTime;
varying float intensity;

void main() {
    vec3 vNormal = normalize(normalMatrix * normal);
    vec3 vNormel = normalize(normalMatrix * viewVector);
    intensity = pow(c - dot(vNormal, vNormel), p);

    float pulse = sin(uTime * 5.0) * 0.02 + 1.0;

    // spherical coordinate
    float radius = length(position);
    float newRadius = length(position) * pulse;
    float theta = acos(position.y / radius);
    float phi = atan(position.z, position.x);

    vec3 newPosition = vec3(newRadius * sin(theta) * cos(phi), newRadius * cos(theta), newRadius * sin(theta) * sin(phi));

    // TODO: fix the pulsing effect
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
