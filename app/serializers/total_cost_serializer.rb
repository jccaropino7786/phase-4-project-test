class TotalCostSerializer < ActiveModel::Serializer
  attributes :id, :summary, :status

  # def total_cost
  #   self.object.project_materials.sum(&:cost)
  # end
end
