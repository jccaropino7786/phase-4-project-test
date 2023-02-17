class ProjectMaterialsController < ApplicationController
    before_action :find_project_material, only: [:update, :destroy]

    def index
        projects = ProjectMaterial.all
        render json: projects, status: :ok
    end

    def create
        new_project = ProjectMaterial.create!(project_params)
        render json: new_project, status: :created
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
        params.permit(:quantity)
    end

    def find_project_material
        @project_material = Project.find(params[:id])
    end
end
