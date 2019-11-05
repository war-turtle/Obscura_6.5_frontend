FROM envoyproxy/envoy-alpine:v1.10.0
COPY envoy.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml -l trace --log-path /tmp/envoy_info.log