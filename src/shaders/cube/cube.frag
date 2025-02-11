#define PI2 6.28318530718

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

varying vec3 vPosition;

float rect(vec2 pt, vec2 size, vec2 center){
  //return 0 if not in box and 1 if it is
  //step(edge, x) 0.0 is returned if x < edge, and 1.0 is returned otherwise.
  vec2 halfsize = size * 0.5;
  vec2 p = pt - center;
  float horz = step(-halfsize.x, p.x) - step(halfsize.x, p.x);
  float vert = step(-halfsize.y, p.y) - step(halfsize.y, p.y);
  return horz * vert;
}

void main (void)
{
  float radius = 0.5;
  float angle = u_time;
  float square = rect(vPosition.xy, vec2(0.5), vec2(cos(angle)*radius, sin(angle)*radius));
  vec3 color = vec3(1.0, 1.0, 0.0) * square;
  gl_FragColor = vec4(color, 1.0); 
}