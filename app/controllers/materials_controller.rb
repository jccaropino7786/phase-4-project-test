class MaterialsController < ApplicationController

    def index
        materials = Material.all
        render json: materials, status: :ok
    end

end
