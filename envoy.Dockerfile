FROM envoyproxy/envoy-alpine:v1.10.0
COPY envoy.yaml /etc/envoy.yaml
COPY /etc/letsencrypt/live/obscuranitkkr.co.in/fullchain.pem /etc/example-com.pem
COPY /etc/letsencrypt/live/obscuranitkkr.co.in/privkey.pem /etc/example-com.key
CMD /usr/local/bin/envoy -c /etc/envoy.yaml -l trace --log-path /tmp/envoy_info.log