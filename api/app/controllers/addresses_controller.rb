class AddressesController < ApplicationController
  # GET /addresses
  # GET /addresses.json
  def index
    @addresses = Address.all

    render json: @addresses
  end

  # GET /addresses/1
  # GET /addresses/1.json
  def show
    @address = Address.find(params[:id])

    render json: @address
  end

  # POST /addresses
  # POST /addresses.json
  def create
    @address = Address.new(address_params)

    if @address.save
      render json: @address, status: :created, location: @address
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /addresses/1
  # PATCH/PUT /addresses/1.json
  def update
    @address = Address.find(params[:id])

    if @address.update(address_params)
      head :no_content
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  # DELETE /addresses/1
  # DELETE /addresses/1.json
  def destroy
    @address = Address.find(params[:id])
    @address.destroy

    head :no_content
  end

  private

    def address_params
      params.permit :name, :type, :prev_name, :district, :name_ru, :active, :lat, :lng, :area
    end
end
