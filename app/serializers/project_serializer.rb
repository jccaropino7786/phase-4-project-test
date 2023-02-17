class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :summary, :status
  has_one :user
  has_many :project_materials

  # def total_cost
  #   self.object.project_materials.material.sum(:cost)
  # end

  
end
