class MaterialsController < ApplicationController
    before_action :find_material, only: [:destroy, :update]

    def index
        materials = Material.all
        render json: materials, status: :ok
    end

    def create
        new_material = Material.create!(material_params)
        render json: new_material, status: :created
    end

    def update
        @material.update!(materials_params)
        render json: @material, status: 202
    end

    def destroy
        @material.destroy
        render json: {}, status: 204
    end

    private

    def material_params
        params.permit(:name, :cost, :description)
    end

    def find_material
        @material = Material.find(params[:id])
    end

end
