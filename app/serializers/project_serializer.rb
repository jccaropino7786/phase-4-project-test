class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :summary, :status, :total_cost
  has_one :user
  has_many :project_materials
  has_many :materials
  
  def total_cost
    self.object.project_materials.sum{ |pm| pm.material.cost * pm.quantity }
  end

  

  
end
