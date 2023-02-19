class ProjectMaterialsController < ApplicationController
    before_action :find_project_material, only: [:update, :destroy]

    def index
        projects = ProjectMaterial.all
        render json: projects, status: :ok
    end

    def create
        new_project_material = ProjectMaterial.create!(project_material_params)
        render json: new_project_material, status: :created
    end

    def update
        @project_material.update!(project_materials_params)
        render json: @project_material, status: 202
    end

    def destroy
        @project_material.destroy
        render json: {}, status: 204

    end

    private

    def project_materials_params
        params.permit(:quantity, :material_id, :project_id)
    end

    def find_project_material
        @project_material = ProjectMaterial.find(params[:id])
    end
end
