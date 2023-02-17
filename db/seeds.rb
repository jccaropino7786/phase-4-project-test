puts "Deleting Old Data"
User.destroy_all
Project.destroy_all
Material.destroy_all
ProjectMaterial.destroy_all

puts "Seeding Users"
    u1 = User.create(email: "jc@live.com", password: "12345678", role: "client"  )

puts "Seeding Projects"
    p1 = Project.create(user_id: u1.id, summary: "Building House in Mexico")
    p2 = Project.create(user_id: u1.id, summary: "Building House in LA")
    p3 = Project.create(user_id: u1.id, summary: "Building House in Guam")


puts "Seeding Materials"

    m1 = Material.create(name: "plywood sheets", cost: 12)
    m2 = Material.create(name: "nails", cost: 2)
    m3 = Material.create(name: "2 x 4", cost: 6)
    m4 = Material.create(name: "1/2' PVC", cost: 3)


puts "Seeding Project Materials"

ProjectMaterial.create(material_id: m1.id, project_id: p1.id, quantity: 15)
ProjectMaterial.create(material_id: m1.id, project_id: p2.id, quantity: 25) 
ProjectMaterial.create(material_id: m1.id, project_id: p3.id, quantity: 35) 
ProjectMaterial.create(material_id: m2.id, project_id: p1.id, quantity: 45) 
ProjectMaterial.create(material_id: m2.id, project_id: p2.id, quantity: 45) 
ProjectMaterial.create(material_id: m3.id, project_id: p1.id, quantity: 45) 
ProjectMaterial.create(material_id: m3.id, project_id: p2.id, quantity: 12) 
ProjectMaterial.create(material_id: m4.id, project_id: p2.id, quantity: 13) 
ProjectMaterial.create(material_id: m4.id, project_id: p3.id, quantity: 14)
ProjectMaterial.create(material_id: m4.id, project_id: p3.id, quantity: 15) 
