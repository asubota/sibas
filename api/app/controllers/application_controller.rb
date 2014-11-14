class ApplicationController < ActionController::API
  after_filter :cors_set_access_control_headers

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'

    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end
end

# Access-Control-Allow-Credentials:true
# Access-Control-Allow-Headers:accept, content-type
# Access-Control-Allow-Methods:GET, PUT, PATCH, OPTIONS
# Access-Control-Allow-Origin: http://sending-app.localhost:3000
# Access-Control-Expose-Headers:
# Access-Control-Max-Age:15

