class ProjectsController < ApplicationController
    before_action :find_project, only: [:show, :update, :destroy]
    
    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def show
        render json: @project, status: :ok
    end

    def create
        new_project = @user.pending_projects.create!(project_params)
        render json: new_project, status: :created
    end

    def update
        @project.update!(project_params)
        render json: @project, status: 202
    end

    def destroy
        @project.destroy
        render json: {}, status: 204

    end

    private

    def find_project
        @project = Project.find(params[:id])
    end

    def project_params
        params.permit(:summary, :status)
    end
end
