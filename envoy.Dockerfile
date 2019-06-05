FROM envoyproxy/envoy-alpine
COPY envoy.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml -l trace --log-path /tmp/envoy_info.log