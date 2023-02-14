class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :summary
  has_one :user
end
